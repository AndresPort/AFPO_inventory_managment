import{ProductService} from "./productPetitions.js";


window.onload = function() {
    getAllProducts()
};

//------------------clean register product form inputs----------------------------------------
function cleanProductFormInputs(){
    let name = document.getElementById("nameRegister")
    name.value=null;

    let description = document.getElementById("descriptionRegister")
    description.value=null;

    let price = document.getElementById("priceRegister")
    price.value=null;

    let brand = document.getElementById("brandRegister")
    brand.value=null;
}

//----------------- btn show register product form----------------------------------
let btnShowRegisterForm = document.getElementById("btnRegisterMenu");

btnShowRegisterForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    showRegisterForm();
    cleanProductFormInputs()
});


//----------------------------btn close register product form--------------------------------

let btnCloseRegisterForm=document.getElementById("btncloseRegister");

btnCloseRegisterForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeRegisterForm();
});


//----------------------show and close register product form-------------------------------------------

let registerForm = document.getElementById("formRegisterFrame");

function showRegisterForm(){
    registerForm.style.visibility="visible";
}

function closeRegisterForm(){
    registerForm.style.visibility="hidden";
}

//---------------------------btn register Product---------------------------------
let btnRegisterProduct= document.getElementById("btnRegisterProduct");

btnRegisterProduct.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    registerProduct()
});

//----------------------------btn close update role form--------------------------------

let btnCloseUpdateFrame=document.getElementById("btncloseUpdateFrame");

    btnCloseUpdateFrame.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeUpdateForm();
});


function fillUInputUpdateForm(product){
    
    let name = document.getElementById("nameUpdate")
    name.value=product.name;

    let description = document.getElementById("descriptionUpdate")
    description.value=product.description;

    let price = document.getElementById("priceUpdate")
    price.value=product.price;

    let brand = document.getElementById("brandUpdate")
    brand.value=product.brand;
    
}

//----------------------show and close update role form-------------------------------------------

let formUpdate = document.getElementById("formUpdateFrame");

function showUpdateForm(product){
    formUpdate.style.visibility="visible";
    fillUInputUpdateForm(product)
}

function closeUpdateForm(){
    formUpdate.style.visibility="hidden";
}

//----------------- btn show SearchProductByName frame----------------------------------
let btnSearchProductByNameFrame = document.getElementById("btnSearchProduct");

btnSearchProductByNameFrame.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    showSearchProductByNameFrame();
});

//----------------- btn close SearchProductByName frame----------------------------------
let btnCloseSearchProductByNameFrame = document.getElementById("BtnCloseSearchProductByNameForm");

btnCloseSearchProductByNameFrame.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeSearchProductByNameFrame();
});

//----------------------show and close searchProductByNameFrame form-------------------------------------------

let searchProductByNameFrame = document.getElementById("searchProductByNameFrame");

function showSearchProductByNameFrame(){
    searchProductByNameFrame.style.visibility="visible";    
}

function closeSearchProductByNameFrame(){
    searchProductByNameFrame.style.visibility="hidden";
}

//----------------------search product-------------------------------------------
let btnSearchProductByName= document.getElementById("btnSearchProductByName");

btnSearchProductByName.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    let name= document.getElementById("formSearchByNameFrameInput").value;

    getProductByName(name);
});


//-------------------pop up product registered---------------------------------------------------
let popUpProductRegistered=document.getElementById("popUpProductRegistered");

let btnClosePopUpProductRegistered = document.getElementById("btnClosePopUpProductRegistered");

btnClosePopUpProductRegistered.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpProductRegistered()
});

function showPopUpProductRegistered(){
    popUpProductRegistered.style.visibility="visible";
}

function closePopUpProductRegistered(){
    popUpProductRegistered.style.visibility="hidden";
}

//--------------------------pop up Product deleted--------------------------------------------
let popUpProductDeleted = document.getElementById("popUpProductDeleted");
let btnClosePopUpProductDeleted = document.getElementById("btnClosePopUpProductDeleted");

btnClosePopUpProductDeleted.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpProductDeleted()
});

function showPopUpProductDeleted(){
    popUpProductDeleted.style.visibility="visible";
}

function closePopUpProductDeleted(){
    popUpProductDeleted.style.visibility="hidden";
}

//-------------------pop up product updated---------------------------------------------------
let popUpProductUpdated=document.getElementById("popUpProductUpdated");

let btnClosePopUpProductUpdated = document.getElementById("btnClosePopUpProductUpdated");

btnClosePopUpProductUpdated.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpProductUpdated()
});

function showPopUpProductUpdated(){
    popUpProductUpdated.style.visibility="visible";
}

function closePopUpProductUpdated(){
    popUpProductUpdated.style.visibility="hidden";
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

//--------------------------Register Product-----------------------------------    
async function registerProduct(){
    const productService = new ProductService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    
    let product= {};
    product.name = document.getElementById("nameRegister").value;
    product.description = document.getElementById("descriptionRegister").value;
    product.price = document.getElementById("priceRegister").value;
    product.brand = document.getElementById("brandRegister").value;
    let outcome = await productService.createProduct(product); 
    
    closeRegisterForm();
    if (outcome === true) {
        showPopUpProductRegistered();
    } else {
        showPopUpError();
    }   
    getAllProducts()
}


//-----------------------------Update Role--------------------------------
async function updateProduct(product) {
    showUpdateForm(product)
    let btnUpdateProduct= document.getElementById("btnUpdateProduct");

    btnUpdateProduct.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    product.name = document.getElementById("nameUpdate").value;
    product.description = document.getElementById("descriptionUpdate").value;
    product.price = document.getElementById("priceUpdate").value;
    product.brand = document.getElementById("brandUpdate").value;
    confirmUpdateProduct(product);
});
}

//-----------------------------Update product--------------------------------
async function confirmUpdateProduct(product){
    const productService = new ProductService('http://127.0.0.1:8080')
    let outcome=productService.updateProduct(product);

    closeUpdateForm();
    if (await outcome === true) {
        showPopUpProductUpdated();
    } else {
        showPopUpError();
    }
    getAllProducts();
}

//-----------------------------Delete product--------------------------------
async function deleteProduct(idProduct) {
    const productService = new ProductService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    let outcome = await productService.deleteProduct(idProduct); 
    console.log("Resultado del servidor:", outcome);
    
    if (outcome === true) {
        showPopUpProductDeleted();
    } else {
        showPopUpError();
    }
    getAllProducts();
}



//-----------------------------Get all Products--------------------------------
async function getAllProducts() {
    const productService = new ProductService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const products = await productService.getAllProducts(); // Llamar al método de la clase

    let tableContent= "";
    for(let product of products){
        let rowContent = `<tr>
        <td>${product.idProduct}</td>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
        <td>${product.brand}</td>
        <td>
            <i class="fa-solid fa-pen" data-id="${product.idProduct}" data-action="update"></i>
            <i class="fa-solid fa-trash" data-id="${product.idProduct}" data-action="delete"></i>

        </td>
        </tr>`

        tableContent+=rowContent;
    }

    document.querySelector("#table tbody").innerHTML = tableContent;

    // Asignar eventos dinámicamente
    document.querySelectorAll(".fa-trash").forEach((trashIcon) => {
        trashIcon.addEventListener("click", (event) => {
            const idProduct = event.target.getAttribute("data-id");
            deleteProduct(idProduct);
        });
    });

    document.querySelectorAll(".fa-pen").forEach((editIcon) => {
        editIcon.addEventListener("click", (event) => {
            const idProduct = event.target.getAttribute("data-id");
            const product = products.find((r) => r.idProduct === parseInt(idProduct)); // Buscar el rol por id
            updateProduct(product)
        });
    });
}
//-----------------------------SearchProductByName--------------------------------
async function getProductByName(name) {
    const productService = new ProductService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    let product= await productService.getProductByName(name);
    let rowContent = `<tr>
        <td>${product.idProduct}</td>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td>${product.price}</td>
        <td>${product.brand}</td>
        <td>
            <i class="fa-solid fa-pen" data-id="${product.idProduct}" data-action="update"></i>
            <i class="fa-solid fa-trash" data-id="${product.idProduct}" data-action="delete"></i>
        </td>
        </tr>`

    document.querySelector("#table tbody").innerHTML = rowContent;

    // Asignar eventos dinámicamente
    document.querySelectorAll(".fa-trash").forEach((trashIcon) => {
        trashIcon.addEventListener("click", (event) => {
            const idProduct = event.target.getAttribute("data-id");
            deleteProduct(idProduct);
        });
    });

    document.querySelectorAll(".fa-pen").forEach((editIcon) => {
        editIcon.addEventListener("click", (event) => {
            const idProduct = event.target.getAttribute("data-id");
            updateProduct(product)
        });
    });
    
}