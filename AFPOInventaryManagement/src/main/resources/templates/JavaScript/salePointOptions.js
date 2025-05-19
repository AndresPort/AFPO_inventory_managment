import{SalePointService} from "./salePointPetitions.js";
import{UserService} from "./userPetitions.js";


window.onload = function() {
    getAllSalePoints()
};

//---------------------------contenido del combobox de los productos------------------------------

async function fillUserCombobox() {
    const userService = new UserService('http://127.0.0.1:8080'); // Crear una instancia de la clase
        const users = await userService.getAllUsers(); // Llamar al método de la clase

    let comboboxContent= null;

    for(let user of users){
        let optionContent= `<option value=${user.idUser}>${user.firstName} ${user.secondName} ${user.lastName} </option>`
        comboboxContent+=optionContent;
    }
    document.querySelector("#nameRegisterInput").innerHTML=comboboxContent;
}


//------------------clean register SalePoint form inputs----------------------------------------
function cleanSalePointFormInputs(){

    let description = document.getElementById("descriptionRegister")
    // description.value=null;

    let price = document.getElementById("priceRegister")
    // price.value=null;

    let brand = document.getElementById("brandRegister")
//     brand.value=null;
}

//----------------- btn show register SalePoint form----------------------------------
let btnShowRegisterForm = document.getElementById("btnRegisterSalePoint");

btnShowRegisterForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    showRegisterForm();
    fillUserCombobox();
    cleanSalePointFormInputs()
});


//----------------------------btn close register salePoint form--------------------------------

let btnCloseRegisterForm=document.getElementById("btncloseRegister");

btnCloseRegisterForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeRegisterForm();
});


//----------------------show and close register SalePoint form-------------------------------------------

let registerForm = document.getElementById("formRegisterFrame");

function showRegisterForm(){
    registerForm.style.visibility="visible";
}

function closeRegisterForm(){
    registerForm.style.visibility="hidden";
}

//---------------------------btn register SalePoint---------------------------------
let btnRegisterSalePointForm= document.getElementById("btnRegisterSalePointForm");

btnRegisterSalePointForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    registerSalePoint()
});

//----------------------------btn close update role form--------------------------------

let btnCloseUpdateFrame=document.getElementById("btncloseUpdateFrame");

    btnCloseUpdateFrame.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeUpdateForm();
});

async function fillUInputUpdateForm(salePoint){
    const userService = new UserService('http://127.0.0.1:8080');
    const user = await userService.getUserById(salePoint.idUser);

    let name =  `<option value=${user.idUser}>${user.firstName} ${user.secondName} ${user.lastName} </option>`
   document.querySelector("#nameUpdateInput").innerHTML=name;

    let adress = document.getElementById("adressUpdate")
    adress.value=salePoint.adress;

    let contactNumber = document.getElementById("contactNumberUpdate")
    contactNumber.value=salePoint.contactNumber;
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

//----------------- btn show SearchSalePointByUser frame----------------------------------
let btnSearchSalePointByUserFrame = document.getElementById("btnSearchSalePointByUser");

btnSearchSalePointByUserFrame.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    showSearchSalePointByUserFrame();
});

//----------------- btn close SearchSalePointByUser frame----------------------------------
let btnCloseSearchSalePointByUserForm = document.getElementById("BtnCloseSearchSalePointByUserForm");

btnCloseSearchSalePointByUserForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeSearchSalePointByUserFrame();
});

//----------------------show and close searchSalePointByUserFrame form-------------------------------------------

let searchSalePointByUserFrame = document.getElementById("searchSalePointByUserFrame");

function showSearchSalePointByUserFrame(){
    searchSalePointByUserFrame.style.visibility="visible";    
}

function closeSearchSalePointByUserFrame(){
    searchSalePointByUserFrame.style.visibility="hidden";
}

// //----------------------search product-------------------------------------------
// let btnSearchProductByName= document.getElementById("btnSearchProductByName");

// btnSearchProductByName.addEventListener("click", event => {
//     event.preventDefault(); // Esto evita el envío automático de GET
//     let name= document.getElementById("formSearchByNameFrameInput").value;

//     getProductByName(name);
// });


//-------------------pop up salePoint registered---------------------------------------------------
let popUpSalePointRegistered=document.getElementById("popUpSalePointRegistered");

let btnClosePopUpSalePointRegistered = document.getElementById("btnClosePopUpSalePointRegistered");

btnClosePopUpSalePointRegistered.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpSalePointRegistered()
});

function showPopUpSalePointRegistered(){
    popUpSalePointRegistered.style.visibility="visible";
}

function closePopUpSalePointRegistered(){
    popUpSalePointRegistered.style.visibility="hidden";
}

//--------------------------pop up SalePoint deleted--------------------------------------------
let popUpSalePointDeleted = document.getElementById("popUpSalePointDeleted");
let btnClosePopUpSalePointDeleted = document.getElementById("btnClosePopUpSalePointDeleted");

btnClosePopUpSalePointDeleted.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpSalePointDeleted()
});

function showPopUpSalePointDeleted(){
    popUpSalePointDeleted.style.visibility="visible";
}

function closePopUpSalePointDeleted(){
    popUpSalePointDeleted.style.visibility="hidden";
}

//-------------------pop up salePoint updated---------------------------------------------------
let popUpSalePointUpdated=document.getElementById("popUpSalePointUpdated");

let btnClosePopUpSalePointUpdated = document.getElementById("btnClosePopUpSalePointUpdated");

btnClosePopUpSalePointUpdated.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpSalePointUpdated()
});

function showPopUpSalePointUpdated(){
    popUpSalePointUpdated.style.visibility="visible";
}

function closePopUpSalePointUpdated(){
    popUpSalePointUpdated.style.visibility="hidden";
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

//--------------------------Register SalePoint-----------------------------------    
async function registerSalePoint(){
    const salePointService = new SalePointService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    
    let salePoint= {};
    salePoint.idUser = document.getElementById("nameRegisterInput").value;
    console.log("idUser", salePoint.idUser);
    salePoint.adress = document.getElementById("adressRegister").value;
    salePoint.contactNumber = document.getElementById("contactNumberRegister").value;
    console.log("Resultado del servidor:", salePoint);
    let outcome = await salePointService.createSalePoint(salePoint); 
    
    closeRegisterForm();
    
    if (outcome === true) {
        showPopUpSalePointRegistered();
    } else {
        showPopUpError();
    }   
    getAllSalePoints();
}


//-----------------------------UpdateSalePoint--------------------------------
async function updateSalePoint(salePoint) {
    showUpdateForm(salePoint)
    let btnUpdateSalePoint= document.getElementById("btnUpdateSalePoint");

    btnUpdateSalePoint.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    salePoint.idUser = document.getElementById("nameUpdateInput").value;
    salePoint.adress = document.getElementById("adressUpdate").value;
    salePoint.contactNumber = document.getElementById("contactNumberUpdate").value;
    confirmUpdateSalePoint(salePoint);
});
}

//-----------------------------Confirm Update salePoint--------------------------------
async function confirmUpdateSalePoint(salePoint){
    console.log("Resultado del servidor:", salePoint);
    const salePointService = new SalePointService('http://127.0.0.1:8080')
    let outcome=salePointService.updateSalePoint(salePoint);

    closeUpdateForm();
    if (await outcome === true) {
        showPopUpSalePointUpdated();
    } else {
        showPopUpError();
    }
    getAllSalePoints();
}

//-----------------------------Delete salePoint--------------------------------
async function deleteSalePoint(idSalePoint) {
    const salePointService = new SalePointService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    let outcome = await salePointService.deleteSalePoint(idSalePoint); 
    console.log("Resultado del servidor:", outcome);

    
    if (outcome === true) {

        showPopUpSalePointDeleted();
    } else {
        showPopUpError();
    }
    getAllSalePoints()
}



//-----------------------------Get all SalePoints--------------------------------
async function getAllSalePoints() {
    const salePointService = new SalePointService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const salePoints = await salePointService.getAllSalePoints(); // Llamar al método de la clase
    const userService = new UserService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    

    let tableContent= "";
    for(let salePoint of salePoints){
        const user = await userService.getUserById(salePoint.idUser);
        let rowContent = `<tr>
        <td>${salePoint.idSalePoint}</td>
        <td>${user.firstName} ${user.secondName} ${user.lastName}</td>
        <td>${salePoint.adress}</td>
        <td>${salePoint.contactNumber}</td>
        <td>
            <i class="fa-solid fa-pen" data-id="${salePoint.idSalePoint}" data-action="update"></i>
            <i class="fa-solid fa-trash" data-id="${salePoint.idSalePoint}" data-action="delete"></i>

        </td>
        </tr>`

        tableContent+=rowContent;
    }

    document.querySelector("#table tbody").innerHTML = tableContent;

    // Asignar eventos dinámicamente
    document.querySelectorAll(".fa-trash").forEach((trashIcon) => {
        trashIcon.addEventListener("click", (event) => {
            const idSalePoint = event.target.getAttribute("data-id");
            deleteSalePoint(idSalePoint);
        });
    });

    document.querySelectorAll(".fa-pen").forEach((editIcon) => {
        editIcon.addEventListener("click", (event) => {
            const idSalePoint = event.target.getAttribute("data-id");
            const salePoint = salePoints.find((r) => r.idSalePoint === parseInt(idSalePoint)); // Buscar el rol por id
            updateSalePoint(salePoint)
        });
    });
}
//-----------------------------SearchSalePointByName--------------------------------
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
            console.log(product)

        });
    });
    
}