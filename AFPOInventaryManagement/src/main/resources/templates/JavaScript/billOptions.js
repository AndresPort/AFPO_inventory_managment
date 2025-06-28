import { BillService } from "./billPetitions.js";
import { TypeOfMovementService } from "./typeOfMovementPetitions.js";
import { PaymentMethodService } from "./PaymentMethodPetitions.js";
import { SalePointService } from "./salePointPetitions.js";
import { BillDetailsService } from "./billDetailsPetitions.js";
import { RoleService } from "./rolePetitions.js";
import { ProductService } from "./productPetitions.js";
import { ClientService } from "./clientPetitions.js";
import { KardexService } from "./kardexPetitions.js";

window.onload = function () {
  fillCorporativeInformation();
  fillSellerName();
  fillTypeOfMovementCombobox();
  fillPaymentMethodCombobox();
  fillProductCombobox();
  fillClientsCombobox();
};

//------------------llenar los datos de la empresa----------------------------------------
async function fillCorporativeInformation() {
  const salePointService = new SalePointService("http://127.0.0.1:8080"); // Crear una instancia de la clase
  const salePoint = await salePointService.getSalePointByIdUser(1); // Llamar al método de la clase
  console.log(salePoint);
  let address = salePoint.address;
  let salePointNumber = salePoint.idSalePoint;
  let contactNumber = salePoint.contactNumber;

  document.querySelector("#address").textContent += address;
  document.querySelector("#salePointNumber").textContent += salePointNumber;
  document.querySelector("#contactNumber").textContent += contactNumber;
}

//------------------clean register kardex form inputs----------------------------------------
function cleanKardexFormInputs() {
  let quantity = document.getElementById("quantity-input");
  quantity.value = null;
}

//---------------------------contenido del combobox de los tipos de movimientos------------------------------

async function fillTypeOfMovementCombobox() {
  const typeOfMovementService = new TypeOfMovementService(
    "http://127.0.0.1:8080"
  ); // Crear una instancia de la clase
  const typeOfMovements = await typeOfMovementService.getAllTypeOfMovements(); // Llamar al método de la clase

  let comboboxContent = "";

  for (let typeOfMovement of typeOfMovements) {
    let optionContent = `<option value=${typeOfMovement.idTypeOfMovement}>${typeOfMovement.movementName}</option>`;
    comboboxContent += optionContent;
  }
  document.querySelector("#ComboBoxTypeOfMovement").innerHTML = comboboxContent;
}

//---------------------------contenido del combobox de los usuarios------------------------------

async function fillClientsCombobox() {
  const clientService = new ClientService("http://127.0.0.1:8080"); // Crear una instancia de la clase
  const clients = await clientService.getAllClients(); // Llamar al método de la clase
  let comboboxContent = "";

  for (let client of clients) {
    let optionContent = `<option value=${client.cedula}>${client.firstName} ${client.lastName}</option>`;
    comboboxContent += optionContent;
  }
  document.querySelector("#ComboBoxCedulaClient").innerHTML = comboboxContent;
}

//---------------------------contenido del combobox de los metodos de pago------------------------------

async function fillPaymentMethodCombobox() {
  const paymentMethodService = new PaymentMethodService(
    "http://127.0.0.1:8080"
  ); // Crear una instancia de la clase
  const paymentMethods = await paymentMethodService.getAllPaymentMethods(); // Llamar al método de la clase

  let comboboxContent = "";

  for (let paymentMethod of paymentMethods) {
    let optionContent = `<option value=${paymentMethod.idPaymentMethod}>${paymentMethod.methodName}</option>`;
    comboboxContent += optionContent;
  }
  document.querySelector("#ComboBoxPaymentMethod").innerHTML = comboboxContent;
}

//------------------llenar el nombre del vendedor----------------------------------------
async function fillSellerName() {
  const user = JSON.parse(sessionStorage.getItem("user"));

  if (!user) {
    alert("No hay sesión activa. Redirigiendo al login.");
    window.location.href = "index.html";
    return;
  }

  try {
    const roleService = new RoleService("http://127.0.0.1:8080");
    const role = await roleService.getRoleById(user.idRole);
    console.log(role.rolName);
    document.getElementById("sellerNameInput").value =
      user.firstName + " " + user.lastName;
    document.querySelector("#header__nameText").textContent =
      user.firstName + " " + user.lastName;
    document.querySelector("#header__roleText").textContent = role.rolName;
  } catch (error) {
    console.error("Error al cargar datos del usuario:", error);
  }
}

//---------------------------contenido del combobox de los productos------------------------------

async function fillProductCombobox() {
  const productService = new ProductService("http://127.0.0.1:8080"); // Crear una instancia de la clase
  const products = await productService.getAllProducts(); // Llamar al método de la clase

  let comboboxContent = "";

  for (let product of products) {
    let optionContent = `<option value=${product.idProduct}>${product.name}</option>`;
    comboboxContent += optionContent;
  }
  document.querySelector("#productNameCombobox").innerHTML = comboboxContent;
}

//----------------- btn show addProductToBill form----------------------------------
let btnShowRegisterForm = document.getElementById(
  "btnShowAddProductToBillForm"
);

btnShowRegisterForm.addEventListener("click", (event) => {
  event.preventDefault(); // Esto evita el envío automático de GET
  showRegisterForm();
  cleanKardexFormInputs();
});

//----------------------------btn close addProductToBill form--------------------------------

let btnCloseRegisterForm = document.getElementById("btncloseRegister");

btnCloseRegisterForm.addEventListener("click", (event) => {
  event.preventDefault(); // Esto evita el envío automático de GET
  closeRegisterForm();
});

//----------------------show and close addProductToBill form-------------------------------------------

let registerForm = document.getElementById("formRegisterFrame");

function showRegisterForm() {
  registerForm.style.visibility = "visible";
}

function closeRegisterForm() {
  registerForm.style.visibility = "hidden";
}

//---------------------------btn add ProductToBill ---------------------------------
let btnAddProduct = document.getElementById("btnAddProductToBill");

btnAddProduct.addEventListener("click", async (event) => {
  event.preventDefault();
  const quantity = parseInt(document.getElementById("quantity-input").value);
  const idProduct = document.getElementById("productNameCombobox").value;
  await addProductToBillRow(quantity, idProduct);
  calculatePartialAndTotalPrice(false);
});

//--------------------------- calculate productPrice ---------------------------------
async function calculateProductsPrice(quantity, product) {
  let price = product.price * quantity;

  return price;
}

//-----------------------------AddProductToBillRow--------------------------------
async function addProductToBillRow(quantity, idProduct) {
  const productService = new ProductService("http://127.0.0.1:8080"); // Crear una instancia de la clase
  const product = await productService.getProductById(idProduct); // Llamar al método de la clase

  let productsPrice = await calculateProductsPrice(quantity, product);

  let productName = product.name;

  let rowContent = `<tr>
        <td>${productName}</td>
        <td>${quantity}</td>
        <td>${productsPrice}</td>
        </tr>`;

  document
    .querySelector("#table tbody")
    .insertAdjacentHTML("beforeend", rowContent);
}

//-------------------pop up bill registered---------------------------------------------------
let popUpBillRegistered = document.getElementById("popUpBillRegistered");

let btnClosePopUpBillRegistered = document.getElementById(
  "btnClosePopUpBillRegistered"
);

btnClosePopUpBillRegistered.addEventListener("click", (event) => {
  event.preventDefault(); // Esto evita el envío automático de GET
  closePopUpBillRegistered();
});

function showPopUpBillRegistered() {
  popUpBillRegistered.style.visibility = "visible";
}

function closePopUpBillRegistered() {
  popUpBillRegistered.style.visibility = "hidden";
}

//--------------------------- calculate partial and total Price ---------------------------------
async function calculatePartialAndTotalPrice(button) {
  const filas = document.querySelectorAll("#table tbody tr");
  let suma = 0;

  filas.forEach((fila) => {
    const precioCelda = fila.cells[2];
    const precio = parseFloat(precioCelda.textContent) || 0;
    suma += precio;
  });

  let total = (suma * 1.19).toFixed(0);

  // Mostrar el subtotal en el input
  document.getElementById("partialPriceInput").value = suma.toFixed(0);
  document.getElementById("totalPriceInput").value = total;

  if (button == true) {
    return parseFloat(total); // Retornar el total calculado:
  }
}

//---------------------------btn registerBill ---------------------------------
let btnRegisterBill = document.getElementById("btnSaveBill");

btnRegisterBill.addEventListener("click", (event) => {
  event.preventDefault(); // Esto evita el envío automático de GET
  registerBill();
});

//----------------------------------------------------------------------
//--------------------------Functions----------------------------------
//----------------------------------------------------------------------

//--------------------------Register Bill-----------------------------------
async function registerBill() {
  const billService = new BillService("http://127.0.0.1:8080"); // Crear una instancia de la clase
  console.log(document.getElementById("ComboBoxCedulaClient").value)
  let clientCedula = document.getElementById("ComboBoxCedulaClient").value;
  let idTypeOfMovement = parseInt(
    document.getElementById("ComboBoxTypeOfMovement").value,
    10
  );
  let idPaymentMethod = parseInt(
    document.getElementById("ComboBoxPaymentMethod").value,
    10
  );

  const clientService = new ClientService("http://127.0.0.1:8080"); // Crear una instancia de la clase
  const client = await clientService.getClientByCedula(clientCedula); // Llamar al método de la clase

  const salePointService = new SalePointService("http://127.0.0.1:8080"); // Crear una instancia de la clase
  const salePoint = await salePointService.getSalePointByIdUser(1); // Llamar al método de la clase

  let bill = {};
  bill.idClient = client.idClient;

  bill.idSalePoint = salePoint.idSalePoint;
  bill.idTypeOfMovement = idTypeOfMovement;
  bill.idWarehouseDetails = 1;
  bill.idPaymentMethod = idPaymentMethod;
  bill.totalPrice = await calculatePartialAndTotalPrice(true);

  console.log(bill);
  let idBillRegistered = await billService.createBill(bill);

  registerBillDetailsProducts(idBillRegistered);

  closeRegisterForm();  
  showPopUpBillRegistered();

   
//--------------------------Register BillDetails Products-----------------------------------
async function registerBillDetailsProducts(idBillRegistered) {
  const billDetailsService = new BillDetailsService("http://127.0.0.1:8080"); // Crear una instancia de la clase

 const productService = new ProductService("http://127.0.0.1:8080"); // Crear una instancia de la clase

const kardexService = new KardexService("http://127.0.0.1:8080"); // Crear una instancia de la clase
  
  const tabla = document.getElementById("table");

  // Obtener todas las filas del tbody
  const filas = tabla
    .getElementsByTagName("tbody")[0]
    .getElementsByTagName("tr");

  // Contar filas
  const numeroFilas = filas.length;

  // Contar columnas (usamos la primera fila para saber cuántas columnas tiene)
  const numeroColumnas = filas[0].getElementsByTagName("td").length;
  console.log("Número de columnas:", numeroColumnas);

  // Recorrer cada fila y cada celda
  for (let i = 0; i < filas.length; i++) {
    
    const celdas = filas[i].getElementsByTagName("td");

    const productName = celdas[0].textContent.trim();
    const quantity = parseInt(celdas[1].textContent.trim());
    const price = parseFloat(celdas[2].textContent.trim());

    const product = await productService.getProductByName(productName); // Llamar al método de la clase
    const kardex = await kardexService.getKardexByIdProduct(product.idProduct); // Llamar al método de la clase

    const billDetails = {
      idBill: idBillRegistered,
      idKardex: kardex.idKardex,
      idProduct: product.idProduct,
      productQuantity: quantity,
      productsPrice: price
    };

    console.log("Registrando detalle:", billDetails);

     let outcome = await billDetailsService.createBillDetails(billDetails);
  }

  //  Limpiar tabla
  const tbody = tabla.getElementsByTagName("tbody")[0];
  tbody.innerHTML = ""; // Elimina todas las filas

  //  Reiniciar precios
  document.getElementById("partialPriceInput").value = "0";
  document.getElementById("totalPriceInput").value = "0";
}

 
}
