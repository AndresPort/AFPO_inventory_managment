import{UserService} from "./userPetitions.js";
import{RoleService} from "./rolePetitions.js";

window.onload = function() {
    getAllUsers()
};

//---------------------------contenido del combobox de los roles------------------------------

async function fillRoleCombobox() {
    const roleService = new RoleService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const roles = await roleService.getAllRoles(); // Llamar al método de la clase

    let comboboxContent= "";

    for(let role of roles){
        let optionContent= `<option value=${role.idRole}>${role.rolName}</option>`
        comboboxContent+=optionContent;
    }
    document.querySelector("#roleRegister").innerHTML=comboboxContent;
    document.querySelector("#userUpdate").innerHTML=comboboxContent;
}


//----------------- btn show register user form----------------------------------
let btnShowRegisterForm = document.getElementById("btnRegisterMenu");

btnShowRegisterForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    showRegisterForm();
    fillRoleCombobox()
});


//----------------------------btn close create role form--------------------------------

let btnCloseRegisterForm=document.getElementById("btncloseRegister");

btnCloseRegisterForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeRegisterForm();
});


//----------------------show and close create role form-------------------------------------------

let registerForm = document.getElementById("formRegisterFrame");

function showRegisterForm(){
    registerForm.style.visibility="visible";
}

function closeRegisterForm(){
    registerForm.style.visibility="hidden";
}

//---------------------------btn create role---------------------------------
let btnRegisterUser= document.getElementById("btnRegisterUser");

btnRegisterUser.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    registerUser()
});



//-------------------pop up user registered---------------------------------------------------
let popUpUserRegistered=document.getElementById("popUpUserRegistered");

let btnClosePopUpUserRegistered = document.getElementById("btnClosePopUpUserRegistered");

btnClosePopUpUserRegistered.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpUserRegistered()
});

function showPopUpUserRegistered(){
    popUpUserRegistered.style.visibility="visible";
}

function closePopUpUserRegistered(){
    popUpUserRegistered.style.visibility="hidden";
}

//--------------------------pop up User deleted--------------------------------------------
let popUpUserDeleted = document.getElementById("popUpUserDeleted");
let btnClosePopUpUserDeleted = document.getElementById("btnClosePopUpUserDeleted");

btnClosePopUpUserDeleted.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpUserDeleted()
});

function showPopUpUserDeleted(){
    popUpUserDeleted.style.visibility="visible";
}

function closePopUpUserDeleted(){
    popUpUserDeleted.style.visibility="hidden";
}

//-------------------pop up user updated---------------------------------------------------
let popUpUserUpdated=document.getElementById("popUpUserUpdated");

let btnClosePopUpUserUpdated = document.getElementById("btnClosePopUpUserUpdated");

btnClosePopUpUserUpdated.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpUserUpdated()
});

function showPopUpUserUpdated(){
    popUpRolUpdated.style.visibility="visible";
}

function closePopUpUserUpdated(){
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

//----------------------------------------------------------------------
//--------------------------Functions----------------------------------
//----------------------------------------------------------------------

//--------------------------Register User-----------------------------------    
async function registerUser(){
    const userService = new UserService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    
    let user= {};
    user.userCode = document.getElementById("userCodeRegister").value;
    user.password = document.getElementById("passwordRegister").value;
    user.idRole = parseInt(document.getElementById("roleRegister").value,10);
    user.firstName = document.getElementById("firstNameRegister").value;
    user.secondName = document.getElementById("secondNameRegister").value;
    user.lastName = document.getElementById("lastNameRegister").value;
    user.secondLastName = document.getElementById("secondLastNameRegister").value;
    user.cedula = document.getElementById("cedulaRegister").value;
    user.phoneNumber = document.getElementById("phoneNumberRegister").value;
    user.email = document.getElementById("emailRegister").value;
    
    let outcome = await userService.createUser(user); 
    
    closeRegisterForm();
    if (outcome === true) {
        showPopUpUserRegistered();
    } else {
        showPopUpError();
    }   
}



//-----------------------------Get all Users--------------------------------
async function getAllUsers() {
    const userService = new UserService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const roleService = new RoleService('http://127.0.0.1:8080');
    const users = await userService.getAllUsers(); // Llamar al método de la clase

    console.log(users);
    let tableContent= "";
    for(let user of users){
        let role= await roleService.getRoleById(user.idRole);
        let rowContent = `<tr>
        <td>${user.idUser}</td>
        <td>${user.userCode}</td>
        <td>${user.password}</td>
        <td>${role.rolName}</td>
        <td>${user.firstName}</td>
        <td>${user.secondName}</td>
        <td>${user.lastName}</td>
        <td>${user.secondLastName}</td>
        <td>${user.cedula}</td>
        <td>${user.phoneNumber}</td>
        <td>${user.email}</td>
        <td>
            <i class="fa-solid fa-pen" data-id="${user.idUser}" data-action="update"></i>
            <i class="fa-solid fa-trash" data-id="${user.idUser}" data-action="delete"></i>

        </td>
        </tr>`

        tableContent+=rowContent;
    }

    document.querySelector("#table tbody").innerHTML = tableContent;

    // Asignar eventos dinámicamente
    document.querySelectorAll(".fa-trash").forEach((trashIcon) => {
        trashIcon.addEventListener("click", (event) => {
            const idUser = event.target.getAttribute("data-id");
            deleteUser(idUser);
        });
    });

    document.querySelectorAll(".fa-pen").forEach((editIcon) => {
        editIcon.addEventListener("click", (event) => {
            const idUser = event.target.getAttribute("data-id");
            const user = user.find((r) => r.idUser === parseInt(idUser)); // Buscar el rol por id
            updateUser(user)
        });
    });

}