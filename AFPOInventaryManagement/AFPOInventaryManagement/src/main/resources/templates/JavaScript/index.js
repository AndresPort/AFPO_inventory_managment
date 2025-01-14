let idUser = document.getElementById("idUser").value;
let password = document.getElementById("password").value;

if (idUser==1 && password==123) {
        alert("Redirigiendo al menú de creación de productos");
        location.href = "../createProducts.html";
}
else {
        alert("La contraseña o el correo son incorrectos");
    }
