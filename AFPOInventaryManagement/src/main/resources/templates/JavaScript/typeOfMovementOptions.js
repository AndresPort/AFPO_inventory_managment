import{TypeOfMovementService} from "./typeOfMovementPetitions.js";
import{RoleService} from "./rolePetitions.js";

window.onload = function() {
    getAllTypeOfMovements()
};

document.addEventListener("DOMContentLoaded", async() => {
    const user = JSON.parse(sessionStorage.getItem("user"));

    const roleService = new RoleService('http://127.0.0.1:8080'); // Crear una instancia de la clase
        let role= await roleService.getRoleById(user.idRole)

        console.log(role)
    if (user) {
        document.querySelector("#header__nameText").textContent = user.firstName + " " + user.lastName;
        document.querySelector("#header__roleText").textContent = role.rolName;
    } else {
        alert("No hay sesión activa. Redirigiendo al login.");
        window.location.href = "index.html";
    }
});

//------------------clean register type of movements form inputs----------------------------------------
function cleanTypeOfMovementFormInputs(){
    let MovementName = document.getElementById("movementNameCreate");
    MovementName.value=null;
}

//----------------- btn show create typeOfMovement form----------------------------------
let btnShowCreateForm = document.getElementById("btnCreateMenu");

btnShowCreateForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    showCreateForm();
    cleanTypeOfMovementFormInputs()
});


//----------------------------btn close create typeOfMovement form--------------------------------

let btnCloseCreateForm=document.getElementById("btnCloseCreate");

btnCloseCreateForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeCreateForm();
});


//----------------------show and close create typeOfMovement form-------------------------------------------

let formCreate = document.getElementById("formsCreateFrame");

function showCreateForm(){
    formCreate.style.visibility="visible";
}

function closeCreateForm(){
    formCreate.style.visibility="hidden";
}

//---------------------------Btn create typeOfMovement---------------------------------
let btnCreateTypeOfMovement= document.getElementById("btnCreateTypeOfMovement");

btnCreateTypeOfMovement.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    createTypeOfMovement()
});

//----------------------------btn close update typeOfMovement form--------------------------------

let btnCloseUpdateForm=document.getElementById("btnCloseUpdate");

btnCloseUpdateForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeUpdateForm();
});


//----------------------show and close update typeOfMovement form-------------------------------------------

let formUpdate = document.getElementById("formUpdateFrame");
let inputTypeOfMovementName= document.getElementById("movementNameUpdate")

function showUpdateForm(typeOfMovement){
    formUpdate.style.visibility="visible";
    inputTypeOfMovementName.value = typeOfMovement.movementName;
}

function closeUpdateForm(){
    formUpdate.style.visibility="hidden";
}


//-------------------pop up typeOfMovement created---------------------------------------------------
let popUpTypeOfMovementCreated=document.getElementById("popUpTypeOfMovementCreated");

let btnClosePopUpTypeOfMovementCreated = document.getElementById("btnClosePopUpTypeOfMovementCreated");

btnClosePopUpTypeOfMovementCreated.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpTypeOfMovementCreated()
});

function showPopUpTypeOfMovementCreated(){
    popUpTypeOfMovementCreated.style.visibility="visible";
}

function closePopUpTypeOfMovementCreated(){
    popUpTypeOfMovementCreated.style.visibility="hidden";
}

//--------------------------pop up typeOfMovement deleted--------------------------------------------
let popUpTypeOfMovementDeleted = document.getElementById("popUpTypeOfMovementDeleted");
let btnClosePopUpTypeOfMovementDeleted = document.getElementById("btnClosePopUpTypeOfMovementDeleted");

btnClosePopUpTypeOfMovementDeleted.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpTypeOfMovementDeleted()
});

function showPopUpTypeOfMovementDeleted(){
    popUpTypeOfMovementDeleted.style.visibility="visible";
}

function closePopUpTypeOfMovementDeleted(){
    popUpTypeOfMovementDeleted.style.visibility="hidden";
}

//-------------------pop up typeOfMovement updated---------------------------------------------------
let popUpTypeOfMovementUpdated=document.getElementById("popUpTypeOfMovementUpdated");

let btnClosePopUpTypeOfMovementUpdated = document.getElementById("btnClosePopUpTypeOfMovementUpdated");

btnClosePopUpTypeOfMovementUpdated.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpTypeOfMovementUpdated()
});

function showPopUpTypeOfMovementUpdated(){
    popUpTypeOfMovementUpdated.style.visibility="visible";
}

function closePopUpTypeOfMovementUpdated(){
    popUpTypeOfMovementUpdated.style.visibility="hidden";
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

//--------------------------Create TypeOfMovement-----------------------------------    
async function createTypeOfMovement(){
    const typeOfMovementService = new TypeOfMovementService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    let typeOfMovementName = document.getElementById("movementNameCreate").value;
    let outcome = await typeOfMovementService.createTypeOfMovement(typeOfMovementName); 
    closeCreateForm();
    
    if (outcome === true) {
        showPopUpTypeOfMovementCreated();
    } else {
        showPopUpError();
    }   
    getAllTypeOfMovements();
}

//-----------------------------Delete TypeOfMovement--------------------------------
async function deleteTypeOfMovement(idTypeOfMovement) {
    const typeOfMovementService = new TypeOfMovementService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    let outcome = await typeOfMovementService.deleteTypeOfMovement(idTypeOfMovement);
    
    if (outcome === true) {
        showPopUpTypeOfMovementDeleted();
    } else {
        showPopUpError();
    }
    getAllTypeOfMovements();
}

//-----------------------------Update TypeOfMovement--------------------------------
async function updateTypeOfMovement(typeOfMovement) {
    const typeOfMovementService = new TypeOfMovementService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    showUpdateForm(typeOfMovement)

    let btnUpdateTypeOfMovement= document.getElementById("btnUpdateTypeOfMovement");

    btnUpdateTypeOfMovement.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    
    let newTypeOfMovementName = document.getElementById("movementNameUpdate").value;
    typeOfMovement.movementName= newTypeOfMovementName;
    confirmUpdateTypeOfMovement(typeOfMovement);
});

}

//-----------------------------Update TypeOfMovement--------------------------------
async function confirmUpdateTypeOfMovement(typeOfMovement){
    const typeOfMovementService = new TypeOfMovementService('http://127.0.0.1:8080')
    let outcome=typeOfMovementService.updateTypeOfMovement(typeOfMovement);

    closeUpdateForm();
    if (await outcome === true) {
        showPopUpTypeOfMovementUpdated();
    } else {
        showPopUpError();
    }
    getAllTypeOfMovements();
}


//-----------------------------Get all TypeOfMovements--------------------------------
async function getAllTypeOfMovements() {
    const typeOfMovementService = new TypeOfMovementService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const typeOfMovements = await typeOfMovementService.getAllTypeOfMovements(); // Llamar al método de la clase

    let tableContent= "";

    for(let typeOfMovement of typeOfMovements){
        let rowContent = `<tr>
        <td>${typeOfMovement.idTypeOfMovement}</td>
        <td>${typeOfMovement.movementName}</td>
        <td>
            <i class="fa-solid fa-pen" data-id="${typeOfMovement.idTypeOfMovement}" data-action="update"></i>
            <i class="fa-solid fa-trash" data-id="${typeOfMovement.idTypeOfMovement}" data-action="delete"></i>

        </td>
        </tr>`

        tableContent+=rowContent;
    }

    document.querySelector("#table tbody").innerHTML = tableContent;

    // Asignar eventos dinámicamente
    document.querySelectorAll(".fa-trash").forEach((trashIcon) => {
        trashIcon.addEventListener("click", (event) => {
            const idTypeOfMovement = event.target.getAttribute("data-id");
            deleteTypeOfMovement(idTypeOfMovement);
        });
    });

    document.querySelectorAll(".fa-pen").forEach((editIcon) => {
        editIcon.addEventListener("click", (event) => {
            const idTypeOfMovement = event.target.getAttribute("data-id");
            const typeOfMovement = typeOfMovements.find((r) => r.idTypeOfMovement === parseInt(idTypeOfMovement)); // Buscar el typeOfMovement por id
            updateTypeOfMovement(typeOfMovement)
        });
    });

}
