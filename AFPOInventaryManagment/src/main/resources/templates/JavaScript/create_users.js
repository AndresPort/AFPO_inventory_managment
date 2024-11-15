let boton = document.getElementById("Btn_registrar");

boton.addEventListener("click", evento => {
    evento.preventDefault(); // Esto evita el envío automático de GET
    registrar_empleado();
});
let registrar_empleado = async()=>{

let campos= {};

campos.code_log_in = document.getElementById("code_log_in").value;
campos.password = document.getElementById("password").value;
campos.first_name = document.getElementById("first_name").value;
campos.second_name = document.getElementById("second_name").value;
campos.last_name = document.getElementById("last_name").value;
campos.second_last_name = document.getElementById("second_last_name").value;
campos.cedula = document.getElementById("cedula").value;
campos.phone_number = document.getElementById("phone_number").value;
campos.email = document.getElementById("email").value;
campos.role = document.getElementById("role").value;

const peticion = await fetch("http://localhost:8080/api/crear_empleado", {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(campos)
});

location.href= "../home_admin.html";

}