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
let inputCategoryName= document.getElementById("categoryNameUpdate")

function showUpdateForm(category){
    formUpdate.style.visibility="visible";
    inputCategoryName.value = category.categoryName;
}

function closeUpdateForm(){
    formUpdate.style.visibility="hidden";
}


//-------------------pop up category created---------------------------------------------------
let popUpCategoryCreated=document.getElementById("popUpCategoryCreated");

let btnClosePopUpCategoryCreated = document.getElementById("btnClosePopUpCategoryCreated");

btnClosePopUpCategoryCreated.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpCategoryCreated()
});

function showPopUpCategoryCreated(){
    popUpCategoryCreated.style.visibility="visible";
}

function closePopUpCategoryCreated(){
    popUpCategoryCreated.style.visibility="hidden";
}

//--------------------------pop up category deleted--------------------------------------------
let popUpCategoryDeleted = document.getElementById("popUpCategoryDeleted");
let btnClosePopUpCategoryDeleted = document.getElementById("btnClosePopUpCategoryDeleted");

btnClosePopUpCategoryDeleted.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpCategoryDeleted()
});

function showPopUpCategoryDeleted(){
    popUpCategoryDeleted.style.visibility="visible";
}

function closePopUpCategoryDeleted(){
    popUpCategoryDeleted.style.visibility="hidden";
}

//-------------------pop up category updated---------------------------------------------------
let popUpCategoryUpdated=document.getElementById("popUpCategoryUpdated");

let btnClosePopUpCategoryUpdated = document.getElementById("btnClosePopUpCategoryUpdated");

btnClosePopUpCategoryUpdated.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    closePopUpCategoryUpdated()
});

function showPopUpCategoryUpdated(){
    popUpCategoryUpdated.style.visibility="visible";
}

function closePopUpCategoryUpdated(){
    popUpCategoryUpdated.style.visibility="hidden";
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
    closeCreateForm();
    
    if (outcome === true) {
        showPopUpCategoryCreated();
    } else {
        showPopUpError();
    }   
    getAllCategories();
}

//-----------------------------Delete Category--------------------------------
async function deleteCategory(idCategory) {
    const categoryService = new CategoryService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    let outcome = await categoryService.deleteCategory(idCategory); 
    
    if (outcome === true) {
        showPopUpCategoryDeleted();
    } else {
        showPopUpError();
    }
    getAllCategories();
}

//-----------------------------Update Category--------------------------------
async function updateCategory(category) {
    const categoryService = new CategoryService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    showUpdateForm(category)

    let btnUpdateCategory= document.getElementById("btnUpdateCategory");

    btnUpdateCategory.addEventListener("click", event => {
    event.preventDefault(); // Esto evita el envío automático de GET
    
    let newCategoryName = document.getElementById("categoryNameUpdate").value;
    category.categoryName= newCategoryName;
    confirmUpdateCategory(category);
});

}

//-----------------------------Update Category--------------------------------
async function confirmUpdateCategory(category){
    const categoryService = new CategoryService('http://127.0.0.1:8080')
    let outcome=categoryService.updateCategory(category);

    closeUpdateForm();
    if (await outcome === true) {
        showPopUpCategoryUpdated();
    } else {
        showPopUpError();
    }
    getAllCategories();
}


//-----------------------------Get all Categories--------------------------------
async function getAllCategories() {
    const categoryService = new CategoryService('http://127.0.0.1:8080'); // Crear una instancia de la clase
    const categories = await categoryService.getAllCategories(); // Llamar al método de la clase

    let tableContent= "";

    for(let category of categories){
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
            const category = categories.find((r) => r.idCategory === parseInt(idCategory)); // Buscar el category por id entre las categorias de la tabla
            updateCategory(category)
        });
    });

}
