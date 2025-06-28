import{BillService} from "./billPetitions.js";
import{ClientService} from "./clientPetitions.js";
import{SalePointService} from "./salePointPetitions.js";
import{ TypeOfMovementService} from "./typeOfMovementPetitions.js";
import{PaymentMethodService} from "./PaymentMethodPetitions.js";

import{BillDetailsService} from "./billDetailsPetitions.js";
import{KardexService} from "./kardexPetitions.js";
import{ProductService} from "./productPetitions.js";


import{RoleService} from "./rolePetitions.js";


window.onload = function() {
    getAllBills()
// fillBillCombobox()
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

// async function fillBillCombobox() {
//     const billService = new BillService('http://127.0.0.1:8080'); // Crear una instancia de la clase
//     const bills = await billService.getAllBills(); // Llamar al método de la clase

//     let comboboxContent= null;

//     for(let bill of bills){
//         let optionContent= `<option value=${bill.idBill}>${bill.idBill}</option>`
//         comboboxContent+=optionContent;
//     }
//     document.querySelector("#categoryUpdate").innerHTML=comboboxContent;
    
// }


//----------------- btn show SearcKardexByProductName frame----------------------------------
// let btnSearcKardexByProductNameFrame = document.getElementById("btnSearchKardexByProduct");

// btnSearcKardexByProductNameFrame.addEventListener("click", event => {
//     event.preventDefault(); // Esto evita el envío automático de GET
//     showSearcKardexByProductNameFrame();
//     fillProductCombobox();
//     fillCategoryCombobox();
// });

//----------------- btn close SearcKardexByProductName frame----------------------------------
// let btnCloseSearcKardexByProductNameFrame = document.getElementById("BtnCloseSearchKardexByIdProductForm");

// btnCloseSearcKardexByProductNameFrame.addEventListener("click", event => {
//     event.preventDefault(); // Esto evita el envío automático de GET
//     closeSearcKardexByProductNameFrame();
// });

//----------------------show and close SearcKardexByProductName form-------------------------------------------

// let searcKardexByProductNameFrame = document.getElementById("searchKardexByIdProductFrame");

// function showSearcKardexByProductNameFrame(){
//     searcKardexByProductNameFrame.style.visibility="visible";
    
// }

// function closeSearcKardexByProductNameFrame(){
//     searcKardexByProductNameFrame.style.visibility="hidden";
// }

//----------------------------------------------------------------------
//--------------------------Functions----------------------------------
//----------------------------------------------------------------------

//-----------------------------Get all Bills--------------------------------
async function getAllBills() {
    const billService = new BillService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    let bills= await billService.getAllBills()
    console.log(bills)
    const clientService = new ClientService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const salePointService = new SalePointService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const typeOfMovementService = new TypeOfMovementService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const paymentMethodService = new PaymentMethodService('http://127.0.0.1:8080'); // Crear una instancia de la clase

    let tableContent= "";
    for(let bill of bills){
        let client =  await clientService.getClientById(bill.idClient)
        let salePoint =  await salePointService.getSalePointById(bill.idClient)
        let typeOfMovement = await typeOfMovementService.getTypeOfMovementById(bill.idTypeOfMovement)
        let paymentMethod = await paymentMethodService.getPaymentMethodById(bill.idPaymentMethod)

        let rowContent = `<tr>
        <td>${bill.idBill}</td>
        <td>${client.cedula}</td>
        <td>${salePoint.idSalePoint}</td>
        <td>${typeOfMovement.movementName}</td>
        <td>${paymentMethod.methodName}</td>
        <td>${bill.totalPrice}</td>
        </tr>`

        tableContent+=rowContent;
    }

    document.querySelector("#billTable tbody").innerHTML = tableContent;

}
//-----------------------------SearchKardexByProduct--------------------------------
// async function getKardexByProduct(idProduct) {
//     const productService = new ProductService('http://127.0.0.1:8080'); // Crear una instancia de la clase
//     const categoryService = new CategoryService('http://127.0.0.1:8080');
//     const kardexService = new KardexService('http://127.0.0.1:8080');
//     let product= await productService.getProductById(idProduct);
//     let kardex= await kardexService.getKardexByIdProduct(idProduct);
//     let category= await categoryService.getCategoryById(kardex.idCategory);
//     let rowContent = `<tr>
//         <td>${kardex.idKardex}</td>
//         <td>${product.name}</td>
//         <td>${category.categoryName}</td>
//         <td>${kardex.quantity}</td>
//         <td>
//             <i class="fa-solid fa-pen" data-id="${kardex.idKardex}" data-action="update"></i>
//             <i class="fa-solid fa-trash" data-id="${kardex.idKardex}" data-action="delete"></i>
//         </td>
//         </tr>`

//     document.querySelector("#table tbody").innerHTML = rowContent;

//     // Asignar eventos dinámicamente
//     document.querySelectorAll(".fa-trash").forEach((trashIcon) => {
//         trashIcon.addEventListener("click", (event) => {
//             const idKardex = event.target.getAttribute("data-id");
//             deleteKardex(idKardex);
//         });
//     });

//     document.querySelectorAll(".fa-pen").forEach((editIcon) => {
//         editIcon.addEventListener("click", (event) => {
//             const idKardex = event.target.getAttribute("data-id");
//             const kardex = kardexList.find((r) => r.idKardex === parseInt(idKardex)); // Buscar el rol por id
//             updateKardex(kardex)
//         });
//     });
// }

//-----------------------------SearchKardexByCategory--------------------------------
// async function getKardexByCategory(idCategory) {
//     const productService = new ProductService('http://127.0.0.1:8080'); // Crear una instancia de la clase
//     const categoryService = new CategoryService('http://127.0.0.1:8080');
//     const kardexService = new KardexService('http://127.0.0.1:8080');
//     let kardexList= await kardexService.getKardexByIdCategory(idCategory);

//     let tableContent= "";
//     for(let kardex of kardexList){
//         let product= await productService.getProductById(kardex.idProduct);
//         let category = await categoryService.getCategoryById(kardex.idCategory);
//         let rowContent = `<tr>
//         <td>${kardex.idKardex}</td>
//         <td>${product.name}</td>
//         <td>${category.categoryName}</td>
//         <td>${kardex.quantity}</td>
//         </tr>`

//         tableContent+=rowContent;
//     }

//     document.querySelector("#table tbody").innerHTML = tableContent;

    
// }