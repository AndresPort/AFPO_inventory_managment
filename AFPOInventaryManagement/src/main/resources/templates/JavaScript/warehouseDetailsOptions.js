import { WarehouseDetailsService } from "./warehouseDetailsPetitions.js";
import { WarehouseService } from "./warehousePetitions.js";
import { KardexService } from "./kardexPetitions.js";
import { CategoryService } from "./categoryPetitions.js";
import { ProductService } from "./productPetitions.js";
import{RoleService} from "./rolePetitions.js";


window.onload = function() {
    getAllWarehouseDetails()
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


//---------------------------contenido del combobox de la bodega------------------------------

async function fillWarehouseCombobox() {
    const warehouseService = new WarehouseService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const warehouses = await warehouseService.getAllWarehouse(); // Llamar al método de la clase

    let comboboxContent= "";

    for(let warehouse of warehouses){

        let optionContent= `<option value=${warehouse.idWarehouse}>${warehouse.name}</option>`
        comboboxContent+=optionContent;
    }
    document.querySelector("#warehouseRegister").innerHTML=comboboxContent;
    document.querySelector("#warehouseUpdate").innerHTML=comboboxContent;
}


//---------------------------contenido del combobox del kardex------------------------------

async function fillKardexCombobox() {
    const kardexService = new KardexService('http://127.0.0.1:8080'); // Crear una instancia de la clas
    const productService = new ProductService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const kardexs = await kardexService.getAllKardex(); // Llamar al método de la clase
    let comboboxContent= "";

    for(let kardex of kardexs){
        const product = await productService.getProductById(kardex.idProduct); // Llamar al método de la clase

        let optionContent= `<option value=${kardex.idKardex}>${product.name}</option>`
        comboboxContent+=optionContent;
    }
    document.querySelector("#productRegister").innerHTML=comboboxContent;
    document.querySelector("#productUpdate").innerHTML=comboboxContent;
}


//----------------- btn show register product in warehouse form----------------------------------
let btnRegisterProductAtWarehouseForm = document.getElementById("btnRegisterProductAtWarehouse");

btnRegisterProductAtWarehouseForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    fillWarehouseCombobox();
    fillKardexCombobox();
    showRegisterForm();
});


//----------------------------btn close register warehouse form--------------------------------

let btnCloseRegisterForm=document.getElementById("btncloseRegister");

btnCloseRegisterForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeRegisterForm();
}); 


//----------------------show and close register user form-------------------------------------------

let registerForm = document.getElementById("formRegisterFrame");

function showRegisterForm(){
    registerForm.style.visibility="visible";
}

function closeRegisterForm(){
    registerForm.style.visibility="hidden";
}

//---------------------------btn register Warehouse---------------------------------
let btnRegisterWarehouse= document.getElementById("btnRegisterWarehouse");

btnRegisterWarehouse.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    registerWarehouseDetails()
});

//----------------------------btn close update role form--------------------------------

let btnCloseUpdateFrame=document.getElementById("btncloseUpdateFrame");

    btnCloseUpdateFrame.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeUpdateForm();
});

//----------------------show and close update warehouse form-------------------------------------------

let formUpdate = document.getElementById("formUpdateFrame");

function showUpdateForm(){
    formUpdate.style.visibility="visible";
    fillWarehouseCombobox();
    fillKardexCombobox()
}

function closeUpdateForm(){
    formUpdate.style.visibility="hidden";
}

//-------------------pop up warehouse registered---------------------------------------------------
let popUpWarehouseRegistered=document.getElementById("popUpWarehouseRegistered");

let btnClosePopUpWarehouseRegistered = document.getElementById("btnClosePopUpWarehouseRegistered");

btnClosePopUpWarehouseRegistered.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpWarehouseRegistered()
});

function showPopUpWarehouseRegistered(){
    popUpWarehouseRegistered.style.visibility="visible";
}

function closePopUpWarehouseRegistered(){
    popUpWarehouseRegistered.style.visibility="hidden";
}

//--------------------------pop up Warehouse deleted--------------------------------------------
let popUpWarehouseDeleted = document.getElementById("popUpWarehouseDeleted");
let btnClosePopUpWarehouseDeleted = document.getElementById("btnClosePopUpWarehouseDeleted");

btnClosePopUpWarehouseDeleted.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpWarehouseDeleted()
});

function showPopUpWarehouseDeleted(){
    popUpWarehouseDeleted.style.visibility="visible";
}

function closePopUpWarehouseDeleted(){
    popUpWarehouseDeleted.style.visibility="hidden";
}

//-------------------pop up user updated---------------------------------------------------
let popUpWarehouseUpdated=document.getElementById("popUpWarehouseUpdated");

let btnClosePopUpWarehouseUpdated = document.getElementById("btnClosePopUpWarehouseUpdated");

btnClosePopUpWarehouseUpdated.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpWarehouseUpdated()
});

function showPopUpWarehouseUpdated(){
    popUpWarehouseUpdated.style.visibility="visible";
}

function closePopUpWarehouseUpdated(){
    popUpWarehouseUpdated.style.visibility="hidden";
}


//------------------pop up an error has ocurred-----------------------
let popUpError=document.getElementById("popUpError");
let btnClosePopUpError = document.getElementById("btnClosePopUpError");

btnClosePopUpError.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpError()
});

function showPopUpError(){
    popUpError.style.visibility="visible";
}

function closePopUpError(){
    popUpError.style.visibility="hidden";
}

//----------------------------------------------------------------------
//--------------------------Functions----------------------------------
//----------------------------------------------------------------------

//--------------------------Register Warehouse-----------------------------------    
async function registerWarehouseDetails(){
    const warehouseDetailsService = new WarehouseDetailsService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    let warehouseDetails= {};
    warehouseDetails.idWarehouse = document.getElementById("warehouseRegister").value;
    warehouseDetails.idKardex = document.getElementById("productRegister").value;
    
    let outcome = await warehouseDetailsService.createWarehouseDetails(warehouseDetails); 
    
    closeRegisterForm();
    if (outcome === true) {
        showPopUpWarehouseRegistered();
    } else {
        showPopUpError();
    }   
    getAllWarehouseDetails()
}


//-----------------------------Update warehouse--------------------------------
async function updateWarehouseDetails(warehouseDetails) {
    console.log(warehouseDetails)
    showUpdateForm()

    let btnUpdateWarehouse= document.getElementById("btnUpdateWarehouseDetails");


    btnUpdateWarehouse.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    warehouseDetails.idWarehouse = document.getElementById("warehouseUpdate").value;
    warehouseDetails.idKardex = document.getElementById("productUpdate").value;
    

    console.log(warehouseDetails)
    confirmUpdateWarehouseDetails(warehouseDetails);
});

}

//-----------------------------Update warehouse--------------------------------
async function confirmUpdateWarehouseDetails(warehouseDetails){
    const warehouseDetailsService = new WarehouseDetailsService('http://127.0.0.1:8080')
    let outcome= warehouseDetailsService.updateWarehouseDetails(warehouseDetails);

    closeUpdateForm();
    if (await outcome === true) {
        showPopUpWarehouseUpdated();
    } else {
        showPopUpError();
    }
    getAllWarehouseDetails();
}

//-----------------------------Delete warehouse--------------------------------
async function deleteWarehouse(idWarehouseDetails) {
    const warehouseDetailsService = new WarehouseDetailsService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    let outcome = await warehouseDetailsService.deleteWarehouseDetails(idWarehouseDetails); 
    console.log("Resultado del servidor:", outcome);
    
    if (outcome === true) {
        showPopUpWarehouseDeleted();
    } else {
        showPopUpError();
    }
    getAllWarehouseDetails();
}



//-----------------------------Get all warehouseDetails--------------------------------
async function getAllWarehouseDetails() {
    const warehouseDetailsService = new WarehouseDetailsService('http://127.0.0.1:8080');
    const warehouseDetails = await warehouseDetailsService.getAllWarehouseDetails(); // Llamar al método de la clase

    const warehouseService = new WarehouseService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const kardexService = new KardexService('http://127.0.0.1:8080'); // Crear una instancia de la clas
    const productService = new ProductService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const categoryService = new CategoryService('http://127.0.0.1:8080'); // Crear una instancia de la clase

    let tableContent= "";
    for(let warehouseDetail of warehouseDetails){
        const warehouse = await warehouseService.getWarehouseById(warehouseDetail.idWarehouse); // Llamar al método de la clase
        const kardex = await kardexService.getKardexById(warehouseDetail.idKardex); // Llamar al método de la clase
        const product = await productService.getProductById(kardex.idProduct); // Llamar al método de la clase
        const category = await categoryService.getCategoryById(kardex.idCategory); // Llamar al método de la clase

        let rowContent = `<tr>
        <td>${warehouseDetail.idWarehouseDetails}</td>
        <td>${warehouse.name}</td>
        <td>${product.name}</td>
        <td>${category.categoryName}</td>
        <td>${kardex.quantity}</td>
        
        <td>
            <i class="fa-solid fa-pen" data-id="${warehouseDetail.idWarehouseDetails}" data-action="update"></i>
            <i class="fa-solid fa-trash" data-id="${warehouseDetail.idWarehouseDetails}" data-action="delete"></i>

        </td>
        </tr>`

        tableContent+=rowContent;
    }

    document.querySelector("#table tbody").innerHTML = tableContent;

    // Asignar eventos dinámicamente
    document.querySelectorAll(".fa-trash").forEach((trashIcon) => {
        trashIcon.addEventListener("click", (event) => {
            const idWarehouseDetail = event.target.getAttribute("data-id");
            deleteWarehouse(idWarehouseDetail);
        });
    });

    document.querySelectorAll(".fa-pen").forEach((editIcon) => {
        editIcon.addEventListener("click", (event) => {
            const idWarehouseDetail = event.target.getAttribute("data-id");
            const warehouseDetail = warehouseDetails.find((r) => r.idWarehouseDetails === parseInt(idWarehouseDetail)); // Buscar el rol por id
            updateWarehouseDetails(warehouseDetail);
        });
    });
}