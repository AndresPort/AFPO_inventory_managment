import{UserService} from "./userPetitions.js";

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
        await searchUserByUserCode(userCode, password);
    } catch (error) {
        console.error("Error:", error);
        alert("No se pudo realizar la autenticación.");
    }
});

let searchUserByUserCode = async (userCode, password) => {
    const userService = new UserService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    let user= await userService.getUserByUserCode(userCode)
    console.log(user);
    passwordVerification(user,password);
};

function passwordVerification(user, password) {
    if (user && password === user.password) {
        if(user.idRole== 1){
            alert("Redirigiendo al menú principal");
            location.href = "./homeAdmin.html";
        }
        else if(user.idRole== 2){
            alert("Redirigiendo al menú principal");
            location.href = "../billOptions.html";
        }
        else if(user.idRole== 3){
            alert("Redirigiendo al menú principal");
            location.href = "../homeLogisticStaff.html";
        }
        else if(user.idRole== 4){
            alert("Redirigiendo al menú principal");
            location.href = "../homeSalePointManager.html";
        }
    } else {
        alert("Contraseña incorrecta o usuario no encontrado.");
    }
    

}
    

