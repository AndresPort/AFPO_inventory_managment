import { WarehouseService } from "./warehousePetitions.js";

window.onload = function() {
    getAllWarehouse()
};

//------------------clean register product form inputs----------------------------------------
function cleanUserFormInputs(){
    let name =document.getElementById("nameRegister");
    name.value=null;

    let contactNumber = document.getElementById("contactNumberRegister")
    contactNumber.value=null;
    
    let adress = document.getElementById("adressRegister")
    adress.value=null;

}


//----------------- btn show register warehouse form----------------------------------
let btnShowRegisterForm = document.getElementById("btnRegisterMenu");

btnShowRegisterForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    showRegisterForm();
    cleanUserFormInputs();
});


//----------------------------btn close register User form--------------------------------

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
    registerWarehouse()
});

//----------------------------btn close update role form--------------------------------

let btnCloseUpdateFrame=document.getElementById("btncloseUpdateFrame");

    btnCloseUpdateFrame.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeUpdateForm();
});

//----------------------------Fill input update form--------------------------------


function fillUInputUpdateForm(warehouse){

    let name =document.getElementById("nameUpdate");
    name.value=warehouse.name;

    let contactNumber = document.getElementById("contactNumberUpdate")
    contactNumber.value=warehouse.contactNumber;

    let adress = document.getElementById("adressUpdate")
    adress.value=warehouse.adress;

    
}

//----------------------show and close update warehouse form-------------------------------------------

let formUpdate = document.getElementById("formUpdateFrame");

function showUpdateForm(user){
    formUpdate.style.visibility="visible";
    fillUInputUpdateForm(user)
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
async function registerWarehouse(){
    const warehouseService = new WarehouseService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    let warehouse= {};
    warehouse.name = document.getElementById("nameRegister").value;
    warehouse.contactNumber = document.getElementById("contactNumberRegister").value;
    warehouse.adress = parseInt(document.getElementById("adressRegister").value);
    
    let outcome = await warehouseService.createWarehouse(warehouse); 
    
    closeRegisterForm();
    if (outcome === true) {
        showPopUpWarehouseRegistered();
    } else {
        showPopUpError();
    }   
    getAllWarehouse()
}


//-----------------------------Update warehouse--------------------------------
async function updateWarehouse(warehouse) {
    const warehouseService = new WarehouseService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    showUpdateForm(warehouse)

    let btnUpdateWarehouse= document.getElementById("btnUpdateWarehouse");

    btnUpdateWarehouse.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    warehouse.name = document.getElementById("nameUpdate").value;
    warehouse.contactNumber = document.getElementById("contactNumberUpdate").value;
    warehouse.adress = document.getElementById("adressUpdate").value;
    

    
    confirmUpdateWarehouse(warehouse);
});

}

//-----------------------------Update warehouse--------------------------------
async function confirmUpdateWarehouse(warehouse){
    const warehouseService = new WarehouseService('http://127.0.0.1:8080')
    let outcome=warehouseService.updateWarehouse(warehouse);

    closeUpdateForm();
    if (await outcome === true) {
        showPopUpWarehouseUpdated();
    } else {
        showPopUpError();
    }
    getAllWarehouse();
}

//-----------------------------Delete warehouse--------------------------------
async function deleteWarehouse(idWarehouse) {
    const warehouseService = new WarehouseService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    let outcome = await warehouseService.deleteWarehouse(idWarehouse); 
    console.log("Resultado del servidor:", outcome);
    
    if (outcome === true) {
        showPopUpWarehouseDeleted();
    } else {
        showPopUpError();
    }
    getAllWarehouse();
}



//-----------------------------Get all warehouse--------------------------------
async function getAllWarehouse() {
    const warehouseService = new WarehouseService('http://127.0.0.1:8080');
    const warehouses = await warehouseService.getAllWarehouse(); // Llamar al método de la clase

    let tableContent= "";
    for(let Warehouse of warehouses){
        let rowContent = `<tr>
        <td>${Warehouse.idWarehouse}</td>
        <td>${Warehouse.name}</td>
        <td>${Warehouse.contactNumber}</td>
        <td>${Warehouse.adress}</td>
        <td>
            <i class="fa-solid fa-pen" data-id="${Warehouse.idWarehouse}" data-action="update"></i>
            <i class="fa-solid fa-trash" data-id="${Warehouse.idWarehouse}" data-action="delete"></i>

        </td>
        </tr>`

        tableContent+=rowContent;
    }

    document.querySelector("#table tbody").innerHTML = tableContent;

    // Asignar eventos dinámicamente
    document.querySelectorAll(".fa-trash").forEach((trashIcon) => {
        trashIcon.addEventListener("click", (event) => {
            const idWarehouse = event.target.getAttribute("data-id");
            deleteWarehouse(idWarehouse);
        });
    });

    document.querySelectorAll(".fa-pen").forEach((editIcon) => {
        editIcon.addEventListener("click", (event) => {
            const idWarehouse = event.target.getAttribute("data-id");
            const Warehouse = warehouses.find((r) => r.idWarehouse === parseInt(idWarehouse)); // Buscar el rol por id
            updateWarehouse(Warehouse)
        });
    });
}