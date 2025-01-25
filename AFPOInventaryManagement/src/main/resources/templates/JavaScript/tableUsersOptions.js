
let btnShowTable= document.getElementById("BtnShowUsers"); 

let btnCloseTable= document.getElementById("BtncloseTable");

btnShowTable.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    showTable()
    listarUsuarios();
});

btnCloseTable.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeTable()
});

function showTable(){
    let table = document.getElementById("tableFrame").style.visibility="visible";
}

function closeTable(){
    let table = document.getElementById("tableFrame").style.visibility="hidden";
}

let listarUsuarios= async ()=>{
    const peticion = await fetch("http://localhost:8080/api/getAllUsers",{
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });

    const usuarios = await peticion.json();

    let contenidoTabla= "";

    for(let usuario of usuarios){
        let contenidoFila = `<tr>
        <td>${usuario.idUser}</td>
        <td>${usuario.userCode}</td>
        <td>${usuario.password}</td>
        <td>${usuario.firstName}</td>
        <td>${usuario.secondName}</td>
        <td>${usuario.lastName}</td>
        <td>${usuario.secondLastName}</td>
        <td>${usuario.cedula}</td>
        <td>${usuario.phoneNumber}</td>
        <td>${usuario.email}</td>
        <td>${usuario.role}</td>
        <td>
            <i onClick= "updateUser(${usuario.idUser}) " class="fa-solid fa-pen"></i>
            <i onClick= "deleteUser(${usuario.idUser}) " class="fa-solid fa-trash"></i>
        </td>
        </tr>`

        contenidoTabla+=contenidoFila;
    }

    document.querySelector("#table tbody").innerHTML = contenidoTabla;

}


let deleteUser= async (id)=>{
    const peticion = await fetch("http://localhost:8080/api/deleteUser/"+id,{
        method: 'DELETE',
        headers: { 
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });

    listarUsuarios();

}




let updateUser = async (id)=>{
    
    mostrarFormulario();

    const peticion = await fetch("http://localhost:8080/api/getUser/"+id,{
        method: 'GET',
        headers: { 
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });

    const user = await peticion.json();
    document.getElementById("userCode").value=user.userCode;
    document.getElementById("password").value=user.password;
    document.getElementById("firstName").value=user.firstName;
    document.getElementById("secondName").value=user.secondName;
    document.getElementById("lastName").value=user.lastName;
    document.getElementById("secondLastName").value=user.secondLastName;
    document.getElementById("cedula").value=user.cedula;
    document.getElementById("phoneNumber").value=user.phoneNumber;
    document.getElementById("email").value=user.email;
    document.getElementById("role").value=user.role;

    let btnModificar= document.getElementById("BtnModifyUser");

    btnModificar.addEventListener("click", evento => {
        evento.preventDefault(); // Esto evita el envío automático de GET
        aplicarModificacion(id);
    });

}

let aplicarModificacion= async (id)=>{
    let campos= {};
    campos.idUser= id;
    campos.userCode= document.getElementById("userCode").value;
    campos.password=document.getElementById("password").value;
    campos.firstName=document.getElementById("firstName").value;
    campos.secondName=document.getElementById("secondName").value;
    campos.lastName=document.getElementById("lastName").value;
    campos.secondLastName=document.getElementById("secondLastName").value;
    campos.cedula=document.getElementById("cedula").value;
    campos.phoneNumber=document.getElementById("phoneNumber").value;
    campos.email=document.getElementById("email").value;
    campos.role=document.getElementById("role").value;

    const peticion = await fetch("http://localhost:8080/api/updateUser", {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(campos)
    });


    listarUsuarios();
}


function mostrarFormulario(){
    let formulario = document.getElementById("formFrame").style.visibility="visible";
}

function ocultarFormulario(){
    let formulario = document.getElementById("formFrame").style.visibility="hidden";
}
