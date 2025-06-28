import{KardexService} from "./kardexPetitions.js";
import{ProductService} from "./productPetitions.js";
import{RoleService} from "./rolePetitions.js";

// window.onload = function() {
//     getAllKardex()
// };

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

//------------------clean register kardex form inputs----------------------------------------
function cleanKardexFormInputs(){
   
    let quantity = document.getElementById("quantityRegister")
    quantity.value=null;
}

//---------------------------contenido del combobox de los productos------------------------------

async function fillProductCombobox() {
    const productService = new ProductService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const products = await productService.getAllProducts(); // Llamar al método de la clase

    let comboboxContent= null;

    for(let product of products){
        let optionContent= `<option value=${product.idProduct}>${product.name}</option>`
        comboboxContent+=optionContent;
    }
    document.querySelector("#productRegister").innerHTML=comboboxContent;
    document.querySelector("#productUpdate").innerHTML=comboboxContent;
    document.querySelector("#formSearchKardexByIdProductFrameSelect").innerHTML=comboboxContent;
}

//---------------------------contenido del combobox de las categorias------------------------------

async function fillCategoryCombobox() {
    const categoryService = new CategoryService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const categories = await categoryService.getAllCategories(); // Llamar al método de la clase

    let comboboxContent= null;

    for(let category of categories){
        let optionContent= `<option value=${category.idCategory}>${category.categoryName}</option>`
        comboboxContent+=optionContent;
    }
    document.querySelector("#categoryRegister").innerHTML=comboboxContent;
    document.querySelector("#categoryUpdate").innerHTML=comboboxContent;
    document.querySelector("#formSearchKardexByIdCategoryFrameSelect").innerHTML=comboboxContent;
}


//----------------- btn show register user form----------------------------------
let btnShowRegisterForm = document.getElementById("btnCreateKardex");

btnShowRegisterForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    showRegisterForm();
    fillProductCombobox();
    fillCategoryCombobox();
    cleanKardexFormInputs();
});


//----------------------------btn close register User form--------------------------------

let btnCloseRegisterForm=document.getElementById("btncloseRegister");

btnCloseRegisterForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeRegisterForm();
});


//----------------------show and close register user form-------------------------------------------

let registerForm = document.getElementById("formRegisterFrame");

function showRegisterForm(){
    registerForm.style.visibility="visible";
}

function closeRegisterForm(){
    registerForm.style.visibility="hidden";
}

//---------------------------btn register User---------------------------------
let btnRegisterKardex= document.getElementById("btnRegisterKardex");

btnRegisterKardex.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    registerKardex()
});

//----------------------------btn close update role form--------------------------------

let btnCloseUpdateFrame=document.getElementById("btncloseUpdateFrame");

    btnCloseUpdateFrame.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeUpdateForm();
    
});


function fillUInputUpdateForm(kardex){
    
    let quantity = document.getElementById("quantityUpdate")
    quantity.value=kardex.quantity;
}

//----------------------show and close update kardex form-------------------------------------------

let formUpdate = document.getElementById("formUpdateFrame");

function showUpdateForm(kardex){
    formUpdate.style.visibility="visible";
    fillUInputUpdateForm(kardex)
    fillProductCombobox();
    fillCategoryCombobox();
}

function closeUpdateForm(){
    formUpdate.style.visibility="hidden";
}

//----------------- btn show SearcKardexByProductName frame----------------------------------
let btnSearcKardexByProductNameFrame = document.getElementById("btnSearchKardexByProduct");

btnSearcKardexByProductNameFrame.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    showSearcKardexByProductNameFrame();
    fillProductCombobox();
    fillCategoryCombobox();
});

//----------------- btn close SearcKardexByProductName frame----------------------------------
let btnCloseSearcKardexByProductNameFrame = document.getElementById("BtnCloseSearchKardexByIdProductForm");

btnCloseSearcKardexByProductNameFrame.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeSearcKardexByProductNameFrame();
});

//----------------------show and close SearcKardexByProductName form-------------------------------------------

let searcKardexByProductNameFrame = document.getElementById("searchKardexByIdProductFrame");

function showSearcKardexByProductNameFrame(){
    searcKardexByProductNameFrame.style.visibility="visible";
    
}

function closeSearcKardexByProductNameFrame(){
    searcKardexByProductNameFrame.style.visibility="hidden";
}

//----------------------search kardexByProductId-------------------------------------------
let btnSearchKardexByIdProduct= document.getElementById("btnSearchKardexByIdProduct");

btnSearchKardexByIdProduct.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    let productId= parseInt (document.getElementById("formSearchKardexByIdProductFrameSelect").value,10);

    getKardexByProduct(productId);
});


//----------------- btn show SearcKardexByCategoryName frame----------------------------------
let btnSearcKardexByCategoryNameFrame = document.getElementById("btnSearchKardexByCategory");

btnSearcKardexByCategoryNameFrame.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    showSearcKardexByCategoryNameFrame();
    fillProductCombobox();
    fillCategoryCombobox();
});

//----------------- btn close SearcKardexByCategoryName frame----------------------------------
let btnCloseSearcKardexByCategoryNameFrame = document.getElementById("BtnCloseSearchKardexByIdCategoryForm");

btnCloseSearcKardexByCategoryNameFrame.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeSearcKardexByCategoryNameFrame();
});

//----------------------show and close SearcKardexByCategoryName form-------------------------------------------

let searcKardexByCategoryNameFrame = document.getElementById("searchKardexByIdCategoryFrame");

function showSearcKardexByCategoryNameFrame(){
    searcKardexByCategoryNameFrame.style.visibility="visible";
    
}

function closeSearcKardexByCategoryNameFrame(){
    searcKardexByCategoryNameFrame.style.visibility="hidden";
}

//----------------------search kardexByCategoryId-------------------------------------------
let btnSearchKardexByIdCategory= document.getElementById("btnSearchKardexByIdCategory");

btnSearchKardexByIdCategory.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    let idCategory= parseInt (document.getElementById("formSearchKardexByIdCategoryFrameSelect").value,10);

    getKardexByCategory(idCategory);
});




//-------------------pop up kardex registered---------------------------------------------------
let popUpKardexRegistered=document.getElementById("popUpKardexRegistered");

let btnClosePopUpKardexRegistered = document.getElementById("btnClosePopUpKardexRegistered");

btnClosePopUpKardexRegistered.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpKardexRegistered()
});

function showPopUpKardexRegistered(){
    popUpKardexRegistered.style.visibility="visible";
}

function closePopUpKardexRegistered(){
    popUpKardexRegistered.style.visibility="hidden";
}

//--------------------------pop up Kardex deleted--------------------------------------------
let popUpKardexDeleted = document.getElementById("popUpKardexDeleted");
let btnClosePopUpKardexDeleted = document.getElementById("btnClosePopUpKardexDeleted");

btnClosePopUpKardexDeleted.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpKardexDeleted()
});

function showPopUpKardexDeleted(){
    popUpKardexDeleted.style.visibility="visible";
}

function closePopUpKardexDeleted(){
    popUpKardexDeleted.style.visibility="hidden";
}

//-------------------pop up kardex updated---------------------------------------------------
let popUpKardexUpdated=document.getElementById("popUpKardexUpdated");

let btnClosePopUpKardexUpdated = document.getElementById("btnClosePopUpKardexUpdated");

btnClosePopUpKardexUpdated.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpKardexUpdated()
});

function showPopUpKardexUpdated(){
    popUpKardexUpdated.style.visibility="visible";
}

function closePopUpKardexUpdated(){
    popUpKardexUpdated.style.visibility="hidden";
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

//--------------------------Register Kardex-----------------------------------    
async function registerKardex(){
    const kardexService = new KardexService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    
    let kardex= {};
    kardex.idProduct = parseInt(document.getElementById("productRegister").value,10);
    kardex.idCategory = parseInt(document.getElementById("categoryRegister").value,10);
    kardex.quantity = parseInt(document.getElementById("quantityRegister").value,10);
    
    let outcome = await kardexService.createKardex(kardex); 
    
    closeRegisterForm();
    if (outcome === true) {
        showPopUpKardexRegistered();
    } else {
        showPopUpError();
    }   
    getAllKardex()
}


//-----------------------------Update Kardex--------------------------------
async function updateKardex(kardex) {
    showUpdateForm(kardex)

    let btnUpdateKardex= document.getElementById("btnUpdateKardex");

    btnUpdateKardex.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET

    kardex.idProduct = parseInt(document.getElementById("productUpdate").value,10);
    kardex.idCategory = parseInt(document.getElementById("categoryUpdate").value,10);
    kardex.quantity = parseInt(document.getElementById("quantityUpdate").value,10);
    
    confirmUpdateKardex(kardex);
});

}

//-----------------------------confirm update kardex--------------------------------
async function confirmUpdateKardex(kardex){
    const kardexService = new KardexService('http://127.0.0.1:8080')
    let outcome=kardexService.updateKardex(kardex);

    closeUpdateForm();
    if (await outcome === true) {
        showPopUpKardexUpdated();
    } else {
        showPopUpError();
    }
    getAllKardex();
}

//-----------------------------Delete kardex--------------------------------
async function deleteKardex(idKardex) {
    const kardexService = new KardexService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    let outcome = await kardexService.deleteKardex(idKardex); 
    console.log("Resultado del servidor:", outcome);
    
    if (outcome === true) {
        showPopUpKardexDeleted();
    } else {
        showPopUpError();
    }
    getAllKardex();
}



//-----------------------------Get all Kardex--------------------------------
async function getAllKardex() {
    const kardexService = new KardexService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const productService = new ProductService('http://127.0.0.1:8080');
    const categoryService = new CategoryService('http://127.0.0.1:8080');
    const kardexList = await kardexService.getAllKardex(); // Llamar al método de la clase

    let tableContent= "";
    for(let kardex of kardexList){
        let product= await productService.getProductById(kardex.idProduct);
        let category = await categoryService.getCategoryById(kardex.idCategory);
        let rowContent = `<tr>
        <td>${kardex.idKardex}</td>
        <td>${product.name}</td>
        <td>${category.categoryName}</td>
        <td>${kardex.quantity}</td>
        <td>
            <i class="fa-solid fa-pen" data-id="${kardex.idKardex}" data-action="update"></i>
            <i class="fa-solid fa-trash" data-id="${kardex.idKardex}" data-action="delete"></i>

        </td>
        </tr>`

        tableContent+=rowContent;
    }

    document.querySelector("#table tbody").innerHTML = tableContent;

    // Asignar eventos dinámicamente
    document.querySelectorAll(".fa-trash").forEach((trashIcon) => {
        trashIcon.addEventListener("click", (event) => {
            const idKardex = event.target.getAttribute("data-id");
            deleteKardex(idKardex);
        });
    });

    document.querySelectorAll(".fa-pen").forEach((editIcon) => {
        editIcon.addEventListener("click", (event) => {
            const idKardex = event.target.getAttribute("data-id");
            const kardex = kardexList.find((r) => r.idKardex === parseInt(idKardex)); // Buscar el rol por id
            updateKardex(kardex)
        });
    });
}
//-----------------------------SearchKardexByProduct--------------------------------
async function getKardexByProduct(idProduct) {
    const productService = new ProductService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const categoryService = new CategoryService('http://127.0.0.1:8080');
    const kardexService = new KardexService('http://127.0.0.1:8080');
    let product= await productService.getProductById(idProduct);
    let kardex= await kardexService.getKardexByIdProduct(idProduct);
    let category= await categoryService.getCategoryById(kardex.idCategory);
    let rowContent = `<tr>
        <td>${kardex.idKardex}</td>
        <td>${product.name}</td>
        <td>${category.categoryName}</td>
        <td>${kardex.quantity}</td>
        <td>
            <i class="fa-solid fa-pen" data-id="${kardex.idKardex}" data-action="update"></i>
            <i class="fa-solid fa-trash" data-id="${kardex.idKardex}" data-action="delete"></i>
        </td>
        </tr>`

    document.querySelector("#table tbody").innerHTML = rowContent;

    // Asignar eventos dinámicamente
    document.querySelectorAll(".fa-trash").forEach((trashIcon) => {
        trashIcon.addEventListener("click", (event) => {
            const idKardex = event.target.getAttribute("data-id");
            deleteKardex(idKardex);
        });
    });

    document.querySelectorAll(".fa-pen").forEach((editIcon) => {
        editIcon.addEventListener("click", (event) => {
            const idKardex = event.target.getAttribute("data-id");
            const kardex = kardexList.find((r) => r.idKardex === parseInt(idKardex)); // Buscar el rol por id
            updateKardex(kardex)
        });
    });
}

//-----------------------------SearchKardexByCategory--------------------------------
async function getKardexByCategory(idCategory) {
    const productService = new ProductService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const categoryService = new CategoryService('http://127.0.0.1:8080');
    const kardexService = new KardexService('http://127.0.0.1:8080');
    let kardexList= await kardexService.getKardexByIdCategory(idCategory);

    let tableContent= "";
    for(let kardex of kardexList){
        let product= await productService.getProductById(kardex.idProduct);
        let category = await categoryService.getCategoryById(kardex.idCategory);
        let rowContent = `<tr>
        <td>${kardex.idKardex}</td>
        <td>${product.name}</td>
        <td>${category.categoryName}</td>
        <td>${kardex.quantity}</td>
        <td>
            <i class="fa-solid fa-pen" data-id="${kardex.idKardex}" data-action="update"></i>
            <i class="fa-solid fa-trash" data-id="${kardex.idKardex}" data-action="delete"></i>

        </td>
        </tr>`

        tableContent+=rowContent;
    }

    document.querySelector("#table tbody").innerHTML = tableContent;

    // Asignar eventos dinámicamente
    document.querySelectorAll(".fa-trash").forEach((trashIcon) => {
        trashIcon.addEventListener("click", (event) => {
            const idKardex = event.target.getAttribute("data-id");
            deleteKardex(idKardex);
        });
    });

    document.querySelectorAll(".fa-pen").forEach((editIcon) => {
        editIcon.addEventListener("click", (event) => {
            const idKardex = event.target.getAttribute("data-id");
            const kardex = kardexList.find((r) => r.idKardex === parseInt(idKardex)); // Buscar el rol por id
            updateKardex(kardex)
        });
    });
}