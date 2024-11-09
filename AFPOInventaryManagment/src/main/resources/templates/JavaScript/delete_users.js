let boton = document.getElementById("Btn_registrar");

boton.addEventListener("click", evento => {
    evento.preventDefault(); // Esto evita el envío automático de GET
    registrar_empleado();
});
let registrar_empleado = async()=>{

let campos= {};

campos.id_employee = document.getElementById("id_employee").value;


const peticion = await fetch("http://localhost:8080/api/actualizar_empleado", {
    method: 'PUT',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(campos)
});

}