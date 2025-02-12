export class ProductService{

    //constructor
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    //CRUD Metods

    //getAllProducts

    async getAllProducts() {
        try {
            const response = await fetch(`${this.baseURL}/api/getAllProducts`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const products = await response.json();
            return products;
        } catch (error) {
            console.error("Error fetching Products:", error);
            throw error;
        }
    }

    //getProductByName
    async getProductByName(name){
        try {
            const response = await fetch(`${this.baseURL}/api/getProductByName/${name}`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const product = await response.json();
            return product;
        } catch (error) {
            console.error("Error fetching Product:", error);
            throw error;
        }
    }

    //Create Product
    async createProduct(product){
        try {
            const response = await fetch(`${this.baseURL}/api/createProduct`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return (true);
            
        } catch (error) {
            console.error("Error fetching Products:", error);
            throw error;
        }
    }

    //Update Product
    async updateProduct(product){
        try {
            const response = await fetch(`${this.baseURL}/api/updateProduct`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return (true);
            
        } catch (error) {
            console.error("Error fetching Products:", error);
            throw error;
        }
    }


    //delete Product
    async deleteProduct(idProduct){
        try {
            const response = await fetch(`${this.baseURL}/api/deleteProduct/${idProduct}`, {
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
            console.error("Error fetching Products:", error);
            throw error;
        }
    
    }
    
}