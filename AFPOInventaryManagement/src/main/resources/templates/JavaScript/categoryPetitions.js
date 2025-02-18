export class CategoryService{

    //constructor
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    //CRUD Metods

    //getAllCategories

    async getAllCategories() {
        try {
            const response = await fetch(`${this.baseURL}/api/getAllCategories`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const categorys = await response.json();
            return categorys;
        } catch (error) {
            console.error("Error fetching categorys:", error);
            throw error;
        }
    }

    //get category by id
    async getCategoryById(idCategory) {
        try {  
            const response = await fetch(`${this.baseURL}/api/getCategoryById/${idCategory}`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            const category = await response.json();
            return category;
        } catch (error) {
            console.error("Error fetching categorys:", error);
            throw error;
        }
    }


    //Create category
    async createCategory(categoryName){
        try {
            const response = await fetch(`${this.baseURL}/api/createCategory/${categoryName}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.text();
            return (true);
            
        } catch (error) {
            console.error("Error fetching categorys:", error);
            throw error;
        }
    }

    //Update category
    async updateCategory(category){
        try {
            const response = await fetch(`${this.baseURL}/api/updateCategory`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(category)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return (true);
            
        } catch (error) {
            console.error("Error fetching categorys:", error);
            throw error;
        }
    }


    //delete category
    async deleteCategory(idCategory){
        try {
            const response = await fetch(`${this.baseURL}/api/deleteCategory/${idCategory}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! `);
            }
            return (true);
            
        } catch (error) {
            console.error("Error fetching categorys:", error);
            throw error;
        }
    
    }
    
}