
window.onload = function(){
    listar_usuarios();
}

let listar_usuarios= async ()=>{
    const peticion = await fetch("http://localhost:8080/api/get_users",{
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });

    const usuarios = await peticion.json();

    let contenido_tabla= "";

    for(let usuario of usuarios){
        let contenido_fila = `<tr>
        <td>${usuario.id_employee}
        <td>${usuario.code_log_in}</td>
        <td>${usuario.password}</td>
        <td>${usuario.first_name}</td>
        <td>${usuario.second_name}</td>
        <td>${usuario.last_name}</td>
        <td>${usuario.second_last_name}</td>
        <td>${usuario.cedula}</td>
        <td>${usuario.phone_number}</td>
        <td>${usuario.email}</td>
        <td>${usuario.role}</td>
        <td>
            <i onClick= "editar_usuario(${usuario.id_employee}) " class="fa-solid fa-pen"></i>
            <i onClick= "borrar_usuario(${usuario.id_employee}) " class="fa-solid fa-trash"></i>
        </td>
        </tr>`

        contenido_tabla+=contenido_fila;
    }

    document.querySelector("#table tbody").outerHTML = contenido_tabla;
}


let borrar_usuario= async (id)=>{
    const peticion = await fetch("http://localhost:8080/api/delete_user/"+id,{
        method: 'DELETE',
        headers: { 
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });

    listar_usuarios();

}


let id_editar;

let editar_usuario = async (id)=>{
    
    mostrar_formulario();

    id_editar=id;

    const peticion = await fetch("http://localhost:8080/api/get_user/"+id_editar,{
        method: 'GET',
        headers: { 
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });

    const user = await peticion.json();
    document.getElementById("code_log_in").value=user.code_log_in;
    document.getElementById("password").value=user.password;
    document.getElementById("first_name").value=user.first_name;
    document.getElementById("second_name").value=user.second_name;
    document.getElementById("last_name").value=user.last_name;
    document.getElementById("second_last_name").value=user.second_last_name;
    document.getElementById("cedula").value=user.cedula;
    document.getElementById("phone_number").value=user.phone_number;
    document.getElementById("email").value=user.email;
    document.getElementById("role").value=user.role;

    let btn_modificar= document.getElementById("Btn_modify_user");

    btn_modificar.addEventListener("click", evento => {
        evento.preventDefault(); // Esto evita el envío automático de GET
        aplicar_modificacion(id_editar);
    });

}

let aplicar_modificacion= async (id)=>{
    let campos= {};
    campos.id_employee= id;
    campos.code_log_in= document.getElementById("code_log_in").value;
    campos.password=document.getElementById("password").value;
    campos.first_name=document.getElementById("first_name").value;
    campos.second_name=document.getElementById("second_name").value;
    campos.last_name=document.getElementById("last_name").value;
    campos.second_last_name=document.getElementById("second_last_name").value;
    campos.cedula=document.getElementById("cedula").value;
    campos.phone_number=document.getElementById("phone_number").value;
    campos.email=document.getElementById("email").value;
    campos.role=document.getElementById("role").value;

    const peticion = await fetch("http://localhost:8080/api/actualizar_empleado", {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(campos)
    });


    listar_usuarios();
}


function mostrar_formulario(){
    let formulario = document.getElementById("form_frame").style.visibility="visible";
}



function ocultar_formulario(){
    let formulario = document.getElementById("form_frame").style.visibility="hidden";
}