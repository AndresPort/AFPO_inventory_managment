import{CategoryService} from "./categoryPetitions.js";

window.onload = function() {
    getAllCategories()
};

//------------------clean register product form inputs----------------------------------------
function cleanCategoryFormInputs(){
    let categoryName = document.getElementById("categoryNameCreate");
    categoryName.value=null;
}

//----------------- btn show create category form----------------------------------
let btnShowCreateForm = document.getElementById("btnCreateMenu");

btnShowCreateForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    showCreateForm();
    cleanCategoryFormInputs()
});


//----------------------------btn close create category form--------------------------------

let btnCloseCreateForm=document.getElementById("btnCloseCreate");

btnCloseCreateForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeCreateForm();
});


//----------------------show and close create category form-------------------------------------------

let formCreate = document.getElementById("formsCreateFrame");

function showCreateForm(){
    formCreate.style.visibility="visible";
}

function closeCreateForm(){
    formCreate.style.visibility="hidden";
}

//---------------------------Btn create category---------------------------------
let btnCreateCategory= document.getElementById("btnCreateCategory");

btnCreateCategory.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    createCategory()
});

//----------------------------btn close update category form--------------------------------

let btnCloseUpdateForm=document.getElementById("btnCloseUpdate");

btnCloseUpdateForm.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closeUpdateForm();
});


//----------------------show and close update category form-------------------------------------------

let formUpdate = document.getElementById("formUpdateFrame");
let inputRolName= document.getElementById("categoryNameUpdate")

function showUpdateForm(category){
    formUpdate.style.visibility="visible";
    inputRolName.value = category.categoryName;
}

function closeUpdateForm(){
    formUpdate.style.visibility="hidden";
}


//-------------------pop up category created---------------------------------------------------
let popUpRolCreated=document.getElementById("popUpRolCreated");

let btnClosePopUpRolCreated = document.getElementById("btnClosePopUpRolCreated");

btnClosePopUpRolCreated.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpRolCreated()
});

function showPopUpRolCreated(){
    popUpRolCreated.style.visibility="visible";
}

function closePopUpRolCreated(){
    popUpRolCreated.style.visibility="hidden";
}

//--------------------------pop up category deleted--------------------------------------------
let popUpRolDeleted = document.getElementById("popUpRolDeleted");
let btnClosePopUpRolDeleted = document.getElementById("btnClosePopUpRolDeleted");

btnClosePopUpRolDeleted.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpRolDeleted()
});

function showPopUpRolDeleted(){
    popUpRolDeleted.style.visibility="visible";
}

function closePopUpRolDeleted(){
    popUpRolDeleted.style.visibility="hidden";
}

//-------------------pop up category updated---------------------------------------------------
let popUpRolUpdated=document.getElementById("popUpRolUpdated");

let btnClosePopUpRolUpdated = document.getElementById("btnClosePopUpRolUpdated");

btnClosePopUpRolUpdated.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpRolUpdated()
});

function showPopUpRolUpdated(){
    popUpRolUpdated.style.visibility="visible";
}

function closePopUpRolUpdated(){
    popUpRolUpdated.style.visibility="hidden";
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



//--------------------------pop up category updated--------------------------------------------


//----------------------------------------------------------------------
//--------------------------Functions----------------------------------
//----------------------------------------------------------------------

//--------------------------Create Category-----------------------------------    
async function createCategory(){
    const categoryService = new CategoryService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    let categoryName = document.getElementById("categoryNameCreate").value;
    let outcome = await categoryService.createCategory(categoryName); 
    console.log("Resultado del servidor:", outcome);
    closeCreateForm();
    
    if (outcome === true) {
        showPopUpRolCreated();
    } else {
        showPopUpError();
    }   
    getAllCategorys();
}

//-----------------------------Delete Category--------------------------------
async function deleteCategory(idCategory) {
    const categoryService = new CategoryService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    let outcome = await categoryService.deleteCategory(idCategory); 
    console.log("Resultado del servidor:", outcome);
    
    if (outcome === true) {
        showPopUpRolDeleted();
    } else {
        showPopUpError();
    }
    getAllCategorys();
}

//-----------------------------Update Category--------------------------------
async function updateCategory(category) {
    const categoryService = new CategoryService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    showUpdateForm(category)

    let btnUpdateCategory= document.getElementById("btnUpdateCategory");

    btnUpdateCategory.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    
    let newRolName = document.getElementById("categoryNameUpdate").value;
    category.categoryName= newRolName;
    confirmUpdateCategory(category);
});

}

//-----------------------------Update Category--------------------------------
async function confirmUpdateCategory(category){
    const categoryService = new CategoryService('http://127.0.0.1:8080')
    let outcome=categoryService.updateCategory(category);

    closeUpdateForm();
    if (await outcome === true) {
        showPopUpRolUpdated();
    } else {
        showPopUpError();
    }
    getAllCategorys();
}


//-----------------------------Get all Categorys--------------------------------
async function getAllCategorys() {
    const categoryService = new CategoryService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const categorys = await categoryService.getAllCategorys(); // Llamar al método de la clase

    let tableContent= "";

    for(let category of categorys){
        let rowContent = `<tr>
        <td>${category.idCategory}</td>
        <td>${category.categoryName}</td>
        <td>
            <i class="fa-solid fa-pen" data-id="${category.idCategory}" data-action="update"></i>
            <i class="fa-solid fa-trash" data-id="${category.idCategory}" data-action="delete"></i>

        </td>
        </tr>`

        tableContent+=rowContent;
    }

    document.querySelector("#table tbody").innerHTML = tableContent;

    // Asignar eventos dinámicamente
    document.querySelectorAll(".fa-trash").forEach((trashIcon) => {
        trashIcon.addEventListener("click", (event) => {
            const idCategory = event.target.getAttribute("data-id");
            deleteCategory(idCategory);
        });
    });

    document.querySelectorAll(".fa-pen").forEach((editIcon) => {
        editIcon.addEventListener("click", (event) => {
            const idCategory = event.target.getAttribute("data-id");
            const category = categorys.find((r) => r.idCategory === parseInt(idCategory)); // Buscar el category por id
            updateCategory(category)
        });
    });

}
