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

//---------------------------btn register User---------------------------------
let btnRegisterUser= document.getElementById("btnRegisterUser");

btnRegisterUser.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    registerUser()
});

//----------------------------btn close update role form--------------------------------

let btnCloseUpdateFrame=document.getElementById("btncloseUpdateFrame");

    btnCloseUpdateFrame.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeUpdateForm();
});


function fillUInputUpdateForm(user){

    let userCode =document.getElementById("userCodeUpdate");
    userCode.value=user.userCode;

    let password = document.getElementById("passwordUpdate")
    password.value=user.password;

    fillRoleCombobox()

    document.getElementById("passwordRegister").value = user.password ;
    
    let firstName = document.getElementById("firstNameUpdate")
    firstName.value=user.firstName;

    let secondName = document.getElementById("secondNameUpdate")
    secondName.value=user.secondName;
    

    let lastName = document.getElementById("lastNameUpdate")
    lastName.value=user.lastName;


    let secondLastName = document.getElementById("secondLastNameUpdate")
    secondLastName.value=user.secondLastName;


    let cedula = document.getElementById("cedulaUpdate")
    cedula.value=user.cedula;

    let phoneNumber = document.getElementById("phoneNumberUpdate")
    phoneNumber.value=user.phoneNumber;

    let email = document.getElementById("emailUpdate")
    email.value=user.email;
}

//----------------------show and close update role form-------------------------------------------

let formUpdate = document.getElementById("formUpdateFrame");

function showUpdateForm(user){
    formUpdate.style.visibility="visible";
    fillUInputUpdateForm(user)
}

function closeUpdateForm(){
    formUpdate.style.visibility="hidden";
}

//----------------- btn show SearchUserByUserCode frame----------------------------------
let btnSearchUserByUserCodeFrame = document.getElementById("btnSearchUser");

btnSearchUserByUserCodeFrame.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    showSearchUserByUserCodeFrame();
});

//----------------- btn close SearchUserByUserCode frame----------------------------------
let btnCloseSearchUserByUserCodeFrame = document.getElementById("BtnCloseSearchUserByUserCodeForm");

btnCloseSearchUserByUserCodeFrame.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeSearchUserByUserCodeFrame();
});

//----------------------show and close searchUserByUserCodeFrame form-------------------------------------------

let searchUserByUserCodeFrame = document.getElementById("searchUserByUserCodeFrame");

function showSearchUserByUserCodeFrame(){
    searchUserByUserCodeFrame.style.visibility="visible";
    
}

function closeSearchUserByUserCodeFrame(){
    searchUserByUserCodeFrame.style.visibility="hidden";
}

//----------------------search user-------------------------------------------
let btnSearchUserByUserCode= document.getElementById("btnSearchUserByUserCode");

btnSearchUserByUserCode.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    let userCode= document.getElementById("formSearchByUserCodeFrameInput").value;

    getUserByUserCode(userCode);
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
    popUpUserUpdated.style.visibility="visible";
}

function closePopUpUserUpdated(){
    popUpUserUpdated.style.visibility="hidden";
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
    getAllUsers()
}


//-----------------------------Update Role--------------------------------
async function updateUser(user) {
    const roleService = new RoleService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    showUpdateForm(user)

    let btnUpdateUser= document.getElementById("btnUpdateUser");

    btnUpdateUser.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    user.userCode = document.getElementById("userCodeUpdate").value;
    user.password = document.getElementById("passwordUpdate").value;
    user.idRole = document.getElementById("userUpdate").value;
    user.firstName = document.getElementById("firstNameUpdate").value;
    user.secondName = document.getElementById("secondNameUpdate").value;
    user.lastName = document.getElementById("lastNameUpdate").value;
    user.secondLastName = document.getElementById("secondLastNameUpdate").value;
    user.cedula = document.getElementById("cedulaUpdate").value;
    user.phoneNumber = document.getElementById("phoneNumberUpdate").value;
    user.email = document.getElementById("emailUpdate").value;

    
    confirmUpdateUser(user);
});

}

//-----------------------------Update user--------------------------------
async function confirmUpdateUser(user){
    const userService = new UserService('http://127.0.0.1:8080')
    let outcome=userService.updateUser(user);

    closeUpdateForm();
    if (await outcome === true) {
        showPopUpUserUpdated();
    } else {
        showPopUpError();
    }
    getAllUsers();
}

//-----------------------------Delete user--------------------------------
async function deleteUser(idUser) {
    const userService = new UserService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    let outcome = await userService.deleteUser(idUser); 
    console.log("Resultado del servidor:", outcome);
    
    if (outcome === true) {
        showPopUpUserDeleted();
    } else {
        showPopUpError();
    }
    getAllUsers();
}



//-----------------------------Get all Users--------------------------------
async function getAllUsers() {
    const userService = new UserService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const roleService = new RoleService('http://127.0.0.1:8080');
    const users = await userService.getAllUsers(); // Llamar al método de la clase

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
            const user = users.find((r) => r.idUser === parseInt(idUser)); // Buscar el rol por id
            updateUser(user)
        });
    });
}
//-----------------------------SearchUserByUserCode--------------------------------
async function getUserByUserCode(userCode) {
    const userService = new UserService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const roleService = new RoleService('http://127.0.0.1:8080');
    let user= await userService.getUserByUserCode(userCode);
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

    document.querySelector("#table tbody").innerHTML = rowContent;
}