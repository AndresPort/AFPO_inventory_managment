import{ClientService} from "./clientPetitions.js";
import{RoleService} from "./rolePetitions.js";


window.onload = function() {
    getAllClients()
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

//------------------clean register client form inputs----------------------------------------
function cleanClientFormInputs(){
    let cedula = document.getElementById("cedulaRegister")
    cedula.value=null;

    let phoneNumber = document.getElementById("phoneNumberRegister")
    phoneNumber.value=null;

    let firstName = document.getElementById("firstNameRegister")
    firstName.value=null;

    let secondName = document.getElementById("secondNameRegister")
    secondName.value=null;
    

    let lastName = document.getElementById("lastNameRegister")
    lastName.value=null;


    let secondLastName = document.getElementById("secondLastNameRegister")
    secondLastName.value=null;

    let homeAdress = document.getElementById("homeAdressRegister")
    homeAdress.value=null;
}

 

//----------------- btn show register client form----------------------------------
let btnShowRegisterForm = document.getElementById("btnRegisterMenu");

btnShowRegisterForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    showRegisterForm();
    cleanClientFormInputs();
});


//----------------------------btn close register client form--------------------------------

let btnCloseRegisterForm=document.getElementById("btncloseRegister");

btnCloseRegisterForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeRegisterForm();
});


//----------------------show and close register client form-------------------------------------------

let registerForm = document.getElementById("formRegisterFrame");

function showRegisterForm(){
    registerForm.style.visibility="visible";
}

function closeRegisterForm(){
    registerForm.style.visibility="hidden";
}

//---------------------------btn register Client---------------------------------
let btnRegisterClient= document.getElementById("btnRegisterClient");

btnRegisterClient.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    registerClient()
});

//----------------------------btn close update role form--------------------------------

let btnCloseUpdateFrame=document.getElementById("btncloseUpdateFrame");

    btnCloseUpdateFrame.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeUpdateForm();
});


function fillUInputUpdateForm(client){
    
    let cedula = document.getElementById("cedulaUpdate")
    cedula.value=client.cedula;

    let phoneNumber = document.getElementById("phoneNumberUpdate")
    phoneNumber.value=client.phoneNumber;

    let firstName = document.getElementById("firstNameUpdate")
    firstName.value=client.firstName;

    let secondName = document.getElementById("secondNameUpdate")
    secondName.value=client.secondName;
    

    let lastName = document.getElementById("lastNameUpdate")
    lastName.value=client.lastName;


    let secondLastName = document.getElementById("secondLastNameUpdate")
    secondLastName.value=client.secondLastName;

    let homeAdress = document.getElementById("homeAdressUpdate")
    homeAdress.value=client.homeAdress;
}

//----------------------show and close update role form-------------------------------------------

let formUpdate = document.getElementById("formUpdateFrame");

function showUpdateForm(client){
    formUpdate.style.visibility="visible";
    fillUInputUpdateForm(client)
}

function closeUpdateForm(){
    formUpdate.style.visibility="hidden";
}

//------------------clean SearchClientByCedula form inputs----------------------------------------

function cleanSearchClientByCedulaInput(){
    let cedula = document.getElementById("formSearchByCedulaFrameInput")
    cedula.value=null;
}
//----------------- btn show SearchClientByCedula frame----------------------------------
let btnSearchClientByCedulaFrame = document.getElementById("btnSearchClient");

btnSearchClientByCedulaFrame.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    showSearchClientByCedulaFrame();
    cleanSearchClientByCedulaInput();
});

//----------------- btn close SearchClientByCedula frame----------------------------------
let btnCloseSearchClientByCedulaFrame = document.getElementById("BtnCloseSearchClientByCedulaForm");

btnCloseSearchClientByCedulaFrame.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeSearchClientByCedulaFrame();
});

//----------------------show and close searchClientByCedulaFrame form-------------------------------------------

let searchClientByCedulaFrame = document.getElementById("searchClientByCedulaFrame");

function showSearchClientByCedulaFrame(){
    searchClientByCedulaFrame.style.visibility="visible";
    
}

function closeSearchClientByCedulaFrame(){
    searchClientByCedulaFrame.style.visibility="hidden";
}

//----------------------search client-------------------------------------------
let btnSearchClientByCedula= document.getElementById("btnSearchClientByCedula");

btnSearchClientByCedula.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    let clientCode= document.getElementById("formSearchByCedulaFrameInput").value;

    getClientByCedula(clientCode);
});



//-------------------pop up client registered---------------------------------------------------
let popUpClientRegistered=document.getElementById("popUpClientRegistered");

let btnClosePopUpClientRegistered = document.getElementById("btnClosePopUpClientRegistered");

btnClosePopUpClientRegistered.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpClientRegistered()
});

function showPopUpClientRegistered(){
    popUpClientRegistered.style.visibility="visible";
}

function closePopUpClientRegistered(){
    popUpClientRegistered.style.visibility="hidden";
}

//--------------------------pop up Client deleted--------------------------------------------
let popUpClientDeleted = document.getElementById("popUpClientDeleted");
let btnClosePopUpClientDeleted = document.getElementById("btnClosePopUpClientDeleted");

btnClosePopUpClientDeleted.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpClientDeleted()
});

function showPopUpClientDeleted(){
    popUpClientDeleted.style.visibility="visible";
}

function closePopUpClientDeleted(){
    popUpClientDeleted.style.visibility="hidden";
}

//-------------------pop up client updated---------------------------------------------------
let popUpClientUpdated=document.getElementById("popUpClientUpdated");

let btnClosePopUpClientUpdated = document.getElementById("btnClosePopUpClientUpdated");

btnClosePopUpClientUpdated.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpClientUpdated()
});

function showPopUpClientUpdated(){
    popUpClientUpdated.style.visibility="visible";
}

function closePopUpClientUpdated(){
    popUpClientUpdated.style.visibility="hidden";
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

//--------------------------Register Client-----------------------------------    
async function registerClient(){
    const clientService = new ClientService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    
    let client= {};
    client.cedula = document.getElementById("cedulaRegister").value;
    client.phoneNumber = document.getElementById("phoneNumberRegister").value;
    client.firstName = document.getElementById("firstNameRegister").value;
    client.secondName = document.getElementById("secondNameRegister").value;
    client.lastName = document.getElementById("lastNameRegister").value;
    client.secondLastName = document.getElementById("secondLastNameRegister").value;
    client.homeAdress = document.getElementById("homeAdressRegister").value;
    
    console.log("Datos del cliente a registrar:", client);
    let outcome = await clientService.createClient(client); 

    closeRegisterForm();
    if (outcome === true) {
        showPopUpClientRegistered();
    } else {
        showPopUpError();
    }   
    getAllClients()
}


//-----------------------------Update Role--------------------------------
async function updateClient(client) {
    showUpdateForm(client)
    let btnUpdateClient= document.getElementById("btnUpdateClient");

    btnUpdateClient.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    client.cedula = document.getElementById("cedulaUpdate").value;
    client.phoneNumber = document.getElementById("phoneNumberUpdate").value;
    client.firstName = document.getElementById("firstNameUpdate").value;
    client.secondName = document.getElementById("secondNameUpdate").value;
    client.lastName = document.getElementById("lastNameUpdate").value;
    client.secondLastName = document.getElementById("secondLastNameUpdate").value;
    client.homeAdress = document.getElementById("homeAdressUpdate").value;
    confirmUpdateClient(client);
});

}

//-----------------------------Update client--------------------------------
async function confirmUpdateClient(client){
    const clientService = new ClientService('http://127.0.0.1:8080')
    let outcome=clientService.updateClient(client);

    closeUpdateForm();
    if (await outcome === true) {
        showPopUpClientUpdated();
    } else {
        showPopUpError();
    }
    getAllClients();
}

//-----------------------------Delete client--------------------------------
async function deleteClient(idClient) {
    const clientService = new ClientService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    let outcome = await clientService.deleteClient(idClient); 
    console.log("Resultado del servidor:", outcome);
    
    if (outcome === true) {
        showPopUpClientDeleted();
    } else {
        showPopUpError();
    }
    getAllClients();
}



//-----------------------------Get all Clients--------------------------------
async function getAllClients() {
    const clientService = new ClientService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const clients = await clientService.getAllClients(); // Llamar al método de la clase

    let tableContent= "";
    for(let client of clients){
        let rowContent = `<tr>
        <td>${client.idClient}</td>
        <td>${client.cedula}</td>
        <td>${client.phoneNumber}</td>
        <td>${client.firstName}</td>
        <td>${client.secondName}</td>
        <td>${client.lastName}</td>
        <td>${client.secondLastName}</td>
        <td>${client.homeAdress}</td>
        <td>
            <i class="fa-solid fa-pen" data-id="${client.idClient}" data-action="update"></i>
            <i class="fa-solid fa-trash" data-id="${client.idClient}" data-action="delete"></i>

        </td>
        </tr>`

        tableContent+=rowContent;
    }

    document.querySelector("#table tbody").innerHTML = tableContent;

    // Asignar eventos dinámicamente
    document.querySelectorAll(".fa-trash").forEach((trashIcon) => {
        trashIcon.addEventListener("click", (event) => {
            const idClient = event.target.getAttribute("data-id");
            deleteClient(idClient);
        });
    });

    document.querySelectorAll(".fa-pen").forEach((editIcon) => {
        editIcon.addEventListener("click", (event) => {
            const idClient = event.target.getAttribute("data-id");
            const client = clients.find((r) => r.idClient === parseInt(idClient)); // Buscar el rol por id
            updateClient(client)
        });
    });
}
//-----------------------------SearchClientByCedula--------------------------------
async function getClientByCedula(clientCode) {
    const clientService = new ClientService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    let client= await clientService.getClientByCedula(clientCode);
    let rowContent = `<tr>
        <td>${client.idClient}</td>
        <td>${client.cedula}</td>
        <td>${client.phoneNumber}</td>
        <td>${client.firstName}</td>
        <td>${client.secondName}</td>
        <td>${client.lastName}</td>
        <td>${client.secondLastName}</td>
        <td>${client.homeAdress}</td>
        <td>
            <i class="fa-solid fa-pen" data-id="${client.idClient}" data-action="update"></i>
            <i class="fa-solid fa-trash" data-id="${client.idClient}" data-action="delete"></i>
        </td>
        </tr>`

    document.querySelector("#table tbody").innerHTML = rowContent;

    // Asignar eventos dinámicamente
    document.querySelectorAll(".fa-trash").forEach((trashIcon) => {
        trashIcon.addEventListener("click", (event) => {
            const idClient = event.target.getAttribute("data-id");
            deleteClient(idClient);
        });
    });

    document.querySelectorAll(".fa-pen").forEach((editIcon) => {
        editIcon.addEventListener("click", (event) => {
            const idClient = event.target.getAttribute("data-id");
            updateClient(client)
        });
    });
    
}