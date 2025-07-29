import{BillService} from "./billPetitions.js";
import{ClientService} from "./clientPetitions.js";
import{SalePointService} from "./salePointPetitions.js";
import{TypeOfMovementService} from "./typeOfMovementPetitions.js";
import{PaymentMethodService} from "./PaymentMethodPetitions.js";
import{WarehouseService} from "./warehousePetitions.js";
import{BillDetailsService} from "./billDetailsPetitions.js";
import{KardexService} from "./kardexPetitions.js";
import{ProductService} from "./productPetitions.js";
import{RoleService} from "./rolePetitions.js";


window.onload = function() {
    getAllBills()
    getAllBillDetails()
};
 
document.addEventListener("DOMContentLoaded", async() => {
    const user = JSON.parse(sessionStorage.getItem("user"));

    const roleService = new RoleService('http://127.0.0.1:8080'); // Crear una instancia de la clase
        let role= await roleService.getRoleById(user.idRole)

    if (user) {
        document.querySelector("#header__nameText").textContent = user.firstName + " " + user.lastName;
        document.querySelector("#header__roleText").textContent = role.rolName;
    } else {
        alert("No hay sesión activa. Redirigiendo al login.");
        window.location.href = "index.html";
    }
});

//---------------------------contenido del combobox de la factura------------------------------

async function fillBillCombobox() {
    const billService = new BillService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const bills = await billService.getAllBills(); // Llamar al método de la clase

    let comboboxContent= "";

    for(let bill of bills){
        let optionContent= `<option value=${bill.idBill}>${bill.idBill}</option>`
        comboboxContent+=optionContent;
    }
    document.querySelector("#searchProductByIdBill-selectInput").innerHTML=comboboxContent;
    
}


//----------------- btn show SearcKardexByProductName frame----------------------------------
let btnSearcKardexByProductNameFrame = document.getElementById("btnSearchProductsByBill");

btnSearcKardexByProductNameFrame.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    showSearchProductByIdBillFrame();
    fillBillCombobox()
});

//----------------- btn close SearcKardexByProductName frame----------------------------------
let btnSearchProductByIdBillForm = document.getElementById("BtnCloseSearchProductByIdBillForm");

btnSearchProductByIdBillForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeSearchProductByIdBillFrame();
});

//----------------------show and close SearcKardexByProductName form-------------------------------------------

let searchProductByIdBill = document.getElementById("searchProductByIdBill");

function showSearchProductByIdBillFrame(){
    searchProductByIdBill.style.visibility="visible";
    
}

function closeSearchProductByIdBillFrame(){
    searchProductByIdBill.style.visibility="hidden";
}


//---------------------- SearcProductByIdBill form-------------------------------------------

let searchProductByIdBillForm = document.getElementById("btnSearchProductByIdBillForm");

searchProductByIdBillForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    let idBill= parseInt(document.getElementById("searchProductByIdBill-selectInput").value,10);
    getProductsByIdBill(idBill)
});


//----------------------------------------------------------------------
//--------------------------Functions----------------------------------
//----------------------------------------------------------------------

//-----------------------------Get all Bills--------------------------------
async function getAllBills() {
    const billService = new BillService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    let bills= await billService.getAllBills()
    const clientService = new ClientService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const salePointService = new SalePointService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const warehouseService = new WarehouseService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const typeOfMovementService = new TypeOfMovementService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const paymentMethodService = new PaymentMethodService('http://127.0.0.1:8080'); // Crear una instancia de la clase

    let tableContent= "";
    for(let bill of bills){
        let client =  await clientService.getClientById(bill.idClient)
        let salePoint =  await salePointService.getSalePointById(bill.idClient)
        let warehouse =  await warehouseService.getWarehouseById(bill.idWarehouse)
        let typeOfMovement = await typeOfMovementService.getTypeOfMovementById(bill.idTypeOfMovement)
        let paymentMethod = await paymentMethodService.getPaymentMethodById(bill.idPaymentMethod)

        let rowContent = `<tr>
        <td>${bill.idBill}</td>
        <td>${client.cedula}</td>
        <td>${salePoint.idSalePoint}</td>
        <td>${warehouse.name}</td>
        <td>${typeOfMovement.movementName}</td>
        <td>${paymentMethod.methodName}</td>
        <td>${bill.totalPrice}</td>
        </tr>`

        tableContent+=rowContent;
    }
    document.querySelector("#billTable tbody").innerHTML = tableContent;
}

//-----------------------------Get all BillsDetails--------------------------------
async function getAllBillDetails() {
    const billDetailsService = new BillDetailsService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    let billsDetails= await billDetailsService.getAllBillDetails()

    const productService = new ProductService('http://127.0.0.1:8080');

    const kardexService = new KardexService('http://127.0.0.1:8080');
   

    let tableContent= "";
    for(let billDetails of billsDetails){

        let kardex =  await kardexService.getKardexById(billDetails.idKardex)
        let product =  await productService.getProductById(kardex.idProduct)

        let rowContent = `<tr>
        <td>${billDetails.idBillDetails}</td>
        <td>${billDetails.idBill}</td>
        <td>${product.name}</td>
        <td>${billDetails.productQuantity}</td>
        <td>${billDetails.productsPrice}</td>

        </tr>`

        tableContent+=rowContent;
    }
    
    document.querySelector("#billDetailsTable tbody").innerHTML = tableContent;

}
//-----------------------------SearchKardexByProduct--------------------------------
async function getProductsByIdBill(idBill) {
    
     const billDetailsService = new BillDetailsService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    let billsDetails= await billDetailsService.getBillDetailsByIdBill(idBill)
    console.log(billsDetails)
    const productService = new ProductService('http://127.0.0.1:8080');

    const kardexService = new KardexService('http://127.0.0.1:8080');
   

    let tableContent= "";
    for(let billDetails of billsDetails){
        

        let kardex =  await kardexService.getKardexById(billDetails.idKardex)
        let product =  await productService.getProductById(kardex.idProduct)
        

        let rowContent = `<tr>
        <td>${billDetails.idBillDetails}</td>
        <td>${billDetails.idBill}</td>
        <td>${product.name}</td>
        <td>${billDetails.productQuantity}</td>
        <td>${billDetails.productsPrice}</td>

        </tr>`

        tableContent+=rowContent;
    }

    document.querySelector("#billDetailsTable tbody").innerHTML = tableContent;
}
