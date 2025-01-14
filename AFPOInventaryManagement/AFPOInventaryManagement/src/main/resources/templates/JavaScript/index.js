let btnShowTable = document.getElementById("LogInBtn");

btnShowTable.addEventListener("click", async (event) => {
    event.preventDefault();

    let userCode = document.getElementById("userCode").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!userCode || !password) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    try {
        await searchUserById(userCode, password);
    } catch (error) {
        console.error("Error:", error);
        alert("No se pudo realizar la autenticación.");
    }
});

let searchUserById = async (userCode, password) => {
    try {
        const peticion = await fetch("http://localhost:8080/api/getUserByUserCode/" + userCode, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        });

        if (peticion.ok) {
            const usuarios = await peticion.json();
            passwordVerification(usuarios, password);
        } else {
            alert("Usuario no encontrado.");
        }
    } catch (error) {
        console.error("Error en la solicitud:", error);
        alert("No se pudo conectar al servidor.");
    }
};

function passwordVerification(usuarios, password) {
        if (usuarios && password === usuarios.password) {
            alert("Redirigiendo al menú principal");
            location.href = "../UsersOptions.html";
        } else {
            alert("Contraseña incorrecta o usuario no encontrado.");
        }
    }
    

