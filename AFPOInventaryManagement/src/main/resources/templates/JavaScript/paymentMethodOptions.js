import{PaymentMethodService} from "./PaymentMethodPetitions.js";
import{RoleService} from "./rolePetitions.js";

window.onload = function() {
    getAllPaymentMethods()
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

//------------------clean register product form inputs----------------------------------------
function cleanPaymentMethodFormInputs(){
    let MethodName = document.getElementById("methodNameCreate");
    MethodName.value=null;
}

//----------------- btn show create paymentMethod form----------------------------------
let btnShowCreateForm = document.getElementById("btnCreateMenu");

btnShowCreateForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    showCreateForm();
    cleanPaymentMethodFormInputs()
});


//----------------------------btn close create paymentMethod form--------------------------------

let btnCloseCreateForm=document.getElementById("btnCloseCreate");

btnCloseCreateForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeCreateForm();
});


//----------------------show and close create paymentMethod form-------------------------------------------

let formCreate = document.getElementById("formsCreateFrame");

function showCreateForm(){
    formCreate.style.visibility="visible";
}

function closeCreateForm(){
    formCreate.style.visibility="hidden";
}

//---------------------------Btn create paymentMethod---------------------------------
let btnCreatePaymentMethod= document.getElementById("btnCreatePaymentMethod");

btnCreatePaymentMethod.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    createPaymentMethod()
});

//----------------------------btn close update paymentMethod form--------------------------------

let btnCloseUpdateForm=document.getElementById("btnCloseUpdate");

btnCloseUpdateForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeUpdateForm();
});


//----------------------show and close update paymentMethod form-------------------------------------------

let formUpdate = document.getElementById("formUpdateFrame");
let inputPaymentMethodName= document.getElementById("methodNameUpdate")

function showUpdateForm(paymentMethod){
    formUpdate.style.visibility="visible";
    inputPaymentMethodName.value = paymentMethod.methodName;
}

function closeUpdateForm(){
    formUpdate.style.visibility="hidden";
}


//-------------------pop up paymentMethod created---------------------------------------------------
let popUpPaymentMethodCreated=document.getElementById("popUpPaymentMethodCreated");

let btnClosePopUpPaymentMethodCreated = document.getElementById("btnClosePopUpPaymentMethodCreated");

btnClosePopUpPaymentMethodCreated.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpPaymentMethodCreated()
});

function showPopUpPaymentMethodCreated(){
    popUpPaymentMethodCreated.style.visibility="visible";
}

function closePopUpPaymentMethodCreated(){
    popUpPaymentMethodCreated.style.visibility="hidden";
}

//--------------------------pop up paymentMethod deleted--------------------------------------------
let popUpPaymentMethodDeleted = document.getElementById("popUpPaymentMethodDeleted");
let btnClosePopUpPaymentMethodDeleted = document.getElementById("btnClosePopUpPaymentMethodDeleted");

btnClosePopUpPaymentMethodDeleted.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpPaymentMethodDeleted()
});

function showPopUpPaymentMethodDeleted(){
    popUpPaymentMethodDeleted.style.visibility="visible";
}

function closePopUpPaymentMethodDeleted(){
    popUpPaymentMethodDeleted.style.visibility="hidden";
}

//-------------------pop up paymentMethod updated---------------------------------------------------
let popUpPaymentMethodUpdated=document.getElementById("popUpPaymentMethodUpdated");

let btnClosePopUpPaymentMethodUpdated = document.getElementById("btnClosePopUpPaymentMethodUpdated");

btnClosePopUpPaymentMethodUpdated.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpPaymentMethodUpdated()
});

function showPopUpPaymentMethodUpdated(){
    popUpPaymentMethodUpdated.style.visibility="visible";
}

function closePopUpPaymentMethodUpdated(){
    popUpPaymentMethodUpdated.style.visibility="hidden";
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



//--------------------------pop up paymentMethod updated--------------------------------------------


//----------------------------------------------------------------------
//--------------------------Functions----------------------------------
//----------------------------------------------------------------------

//--------------------------Create PaymentMethod-----------------------------------    
async function createPaymentMethod(){
    const paymentMethodService = new PaymentMethodService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    let paymentMethodName = document.getElementById("methodNameCreate").value;
    let outcome = await paymentMethodService.createPaymentMethod(paymentMethodName); 
    closeCreateForm();
    
    if (outcome === true) {
        showPopUpPaymentMethodCreated();
    } else {
        showPopUpError();
    }   
    getAllPaymentMethods();
}

//-----------------------------Delete PaymentMethod--------------------------------
async function deletePaymentMethod(idPaymentMethod) {
    const paymentMethodService = new PaymentMethodService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    let outcome = await paymentMethodService.deletePaymentMethod(idPaymentMethod);
    
    if (outcome === true) {
        showPopUpPaymentMethodDeleted();
    } else {
        showPopUpError();
    }
    getAllPaymentMethods();
}

//-----------------------------Update PaymentMethod--------------------------------
async function updatePaymentMethod(paymentMethod) {
    const paymentMethodService = new PaymentMethodService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    showUpdateForm(paymentMethod)

    let btnUpdatePaymentMethod= document.getElementById("btnUpdatePaymentMethod");

    btnUpdatePaymentMethod.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    
    let newPaymentMethodName = document.getElementById("methodNameUpdate").value;
    paymentMethod.methodName= newPaymentMethodName;
    confirmUpdatePaymentMethod(paymentMethod);
});

}

//-----------------------------Update PaymentMethod--------------------------------
async function confirmUpdatePaymentMethod(paymentMethod){
    const paymentMethodService = new PaymentMethodService('http://127.0.0.1:8080')
    let outcome=paymentMethodService.updatePaymentMethod(paymentMethod);

    closeUpdateForm();
    if (await outcome === true) {
        showPopUpPaymentMethodUpdated();
    } else {
        showPopUpError();
    }
    getAllPaymentMethods();
}


//-----------------------------Get all PaymentMethods--------------------------------
async function getAllPaymentMethods() {
    const paymentMethodService = new PaymentMethodService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const paymentMethods = await paymentMethodService.getAllPaymentMethods(); // Llamar al método de la clase

    let tableContent= "";

    for(let paymentMethod of paymentMethods){
        let rowContent = `<tr>
        <td>${paymentMethod.idPaymentMethod}</td>
        <td>${paymentMethod.methodName}</td>
        <td>
            <i class="fa-solid fa-pen" data-id="${paymentMethod.idPaymentMethod}" data-action="update"></i>
            <i class="fa-solid fa-trash" data-id="${paymentMethod.idPaymentMethod}" data-action="delete"></i>

        </td>
        </tr>`

        tableContent+=rowContent;
    }

    document.querySelector("#table tbody").innerHTML = tableContent;

    // Asignar eventos dinámicamente
    document.querySelectorAll(".fa-trash").forEach((trashIcon) => {
        trashIcon.addEventListener("click", (event) => {
            const idPaymentMethod = event.target.getAttribute("data-id");
            deletePaymentMethod(idPaymentMethod);
        });
    });

    document.querySelectorAll(".fa-pen").forEach((editIcon) => {
        editIcon.addEventListener("click", (event) => {
            const idPaymentMethod = event.target.getAttribute("data-id");
            const paymentMethod = paymentMethods.find((r) => r.idPaymentMethod === parseInt(idPaymentMethod)); // Buscar el paymentMethod por id
            updatePaymentMethod(paymentMethod)
        });
    });

}
