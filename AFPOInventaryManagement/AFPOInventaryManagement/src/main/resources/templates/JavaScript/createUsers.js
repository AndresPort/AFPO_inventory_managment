
let btnShowForm = document.getElementById("BtnRegisterMenu");

btnShowForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    showForm();
});

let btnCloseForm=document.getElementById("BtncloseRegister");

btnCloseForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeForm();
});

function showForm(){
    let formulario = document.getElementById("principalRegisterFrame").style.visibility="visible";
}

function closeForm(){
    let formulario = document.getElementById("principalRegisterFrame").style.visibility="hidden";
}


let btnRegister = document.getElementById("BtnRegistrar");

btnRegister.addEventListener("click", evento => {
    evento.preventDefault(); // Esto evita el envío automático de GET
    registrarEmpleado();
});

let registrarEmpleado = async()=>{

let campos= {};

campos.userCode = document.getElementById("userCodeRegister").value;
campos.password = document.getElementById("passwordRegister").value;
campos.firstName = document.getElementById("firstNameRegister").value;
campos.secondName = document.getElementById("secondNameRegister").value;
campos.lastName = document.getElementById("lastName").value;
campos.secondLastName = document.getElementById("secondLastNameRegister").value;
campos.cedula = document.getElementById("cedulaRegister").value;
campos.phoneNumber = document.getElementById("phoneNumberRegister").value;
campos.email = document.getElementById("emailRegister").value;
campos.role = document.getElementById("roleRegister").value;

const peticion = await fetch("http://localhost:8080/api/createUser", {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(campos)
});

location.href= "../homeAdmin.html";

}



