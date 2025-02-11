import{RoleService} from "./rolePetitions.js";

window.onload = function() {
    getAllRoles()
};

//----------------- btn show create role form----------------------------------
let btnShowCreateForm = document.getElementById("btnCreateMenu");

btnShowCreateForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    showCreateForm();
});


//----------------------------btn close create role form--------------------------------

let btnCloseCreateForm=document.getElementById("btnCloseCreate");

btnCloseCreateForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeCreateForm();
});


//----------------------show and close create role form-------------------------------------------

let formCreate = document.getElementById("formsCreateFrame");

function showCreateForm(){
    formCreate.style.visibility="visible";
}

function closeCreateForm(){
    formCreate.style.visibility="hidden";
}

//---------------------------Btn create role---------------------------------
let btnCreateRole= document.getElementById("btnCreateRole");

btnCreateRole.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    createRole()
});

//----------------------------btn close update role form--------------------------------

let btnCloseUpdateForm=document.getElementById("btnCloseUpdate");

btnCloseUpdateForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeUpdateForm();
});


//----------------------show and close update role form-------------------------------------------

let formUpdate = document.getElementById("formUpdateFrame");
let inputRolName= document.getElementById("rolNameUpdate")

function showUpdateForm(role){
    formUpdate.style.visibility="visible";
    inputRolName.value = role.rolName;
}

function closeUpdateForm(){
    formUpdate.style.visibility="hidden";
}


//-------------------pop up rol created---------------------------------------------------
let popUpRolCreated=document.getElementById("popUpRolCreated");

let btnClosePopUpRolCreated = document.getElementById("btnClosePopUpRolCreated");

btnClosePopUpRolCreated.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpRolCreated()
});

function showPopUpRolCreated(){
    popUpRolCreated.style.visibility="visible";
}

function closePopUpRolCreated(){
    popUpRolCreated.style.visibility="hidden";
}

//--------------------------pop up rol deleted--------------------------------------------
let popUpRolDeleted = document.getElementById("popUpRolDeleted");
let btnClosePopUpRolDeleted = document.getElementById("btnClosePopUpRolDeleted");

btnClosePopUpRolDeleted.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpRolDeleted()
});

function showPopUpRolDeleted(){
    popUpRolDeleted.style.visibility="visible";
}

function closePopUpRolDeleted(){
    popUpRolDeleted.style.visibility="hidden";
}

//-------------------pop up rol updated---------------------------------------------------
let popUpRolUpdated=document.getElementById("popUpRolUpdated");

let btnClosePopUpRolUpdated = document.getElementById("btnClosePopUpRolUpdated");

btnClosePopUpRolUpdated.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpRolUpdated()
});

function showPopUpRolUpdated(){
    popUpRolUpdated.style.visibility="visible";
}

function closePopUpRolUpdated(){
    popUpRolUpdated.style.visibility="hidden";
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



//--------------------------pop up rol updated--------------------------------------------


//----------------------------------------------------------------------
//--------------------------Functions----------------------------------
//----------------------------------------------------------------------

//--------------------------Create Role-----------------------------------    
async function createRole(){
    const roleService = new RoleService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    let rolName = document.getElementById("rolNameCreate").value;
    let outcome = await roleService.createRole(rolName); 
    console.log("Resultado del servidor:", outcome);
    closeCreateForm();
    
    if (outcome === true) {
        showPopUpRolCreated();
    } else {
        showPopUpError();
    }   
    getAllRoles();
}

//-----------------------------Delete Role--------------------------------
async function deleteRole(idRole) {
    const roleService = new RoleService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    let outcome = await roleService.deleteRole(idRole); 
    console.log("Resultado del servidor:", outcome);
    
    if (outcome === true) {
        showPopUpRolDeleted();
    } else {
        showPopUpError();
    }
    getAllRoles();
}

//-----------------------------Update Role--------------------------------
async function updateRole(role) {
    const roleService = new RoleService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    showUpdateForm(role)

    let btnUpdateRole= document.getElementById("btnUpdateRole");

    btnUpdateRole.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    
    let newRolName = document.getElementById("rolNameUpdate").value;
    role.rolName= newRolName;
    confirmUpdateRole(role);
});

}

//-----------------------------Update Role--------------------------------
async function confirmUpdateRole(role){
    const roleService = new RoleService('http://127.0.0.1:8080')
    let outcome=roleService.updateRole(role);

    closeUpdateForm();
    if (await outcome === true) {
        showPopUpRolUpdated();
    } else {
        showPopUpError();
    }
    getAllRoles();
}


//-----------------------------Get all Roles--------------------------------
async function getAllRoles() {
    const roleService = new RoleService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const roles = await roleService.getAllRoles(); // Llamar al método de la clase

    let tableContent= "";

    for(let role of roles){
        let rowContent = `<tr>
        <td>${role.idRole}</td>
        <td>${role.rolName}</td>
        <td>
            <i class="fa-solid fa-pen" data-id="${role.idRole}" data-action="update"></i>
            <i class="fa-solid fa-trash" data-id="${role.idRole}" data-action="delete"></i>

        </td>
        </tr>`

        tableContent+=rowContent;
    }

    document.querySelector("#table tbody").innerHTML = tableContent;

    // Asignar eventos dinámicamente
    document.querySelectorAll(".fa-trash").forEach((trashIcon) => {
        trashIcon.addEventListener("click", (event) => {
            const idRole = event.target.getAttribute("data-id");
            deleteRole(idRole);
        });
    });

    document.querySelectorAll(".fa-pen").forEach((editIcon) => {
        editIcon.addEventListener("click", (event) => {
            const idRole = event.target.getAttribute("data-id");
            const role = roles.find((r) => r.idRole === parseInt(idRole)); // Buscar el rol por id
            updateRole(role)
        });
    });

}
