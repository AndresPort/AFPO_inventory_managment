export class SalePointService{

    //constructor
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    //CRUD Metods

    //getAllSalePoints

    async getAllSalePoints() {
        try {
            const response = await fetch(`${this.baseURL}/api/getAllSalePoints`, {
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
            console.error("Error fetching SalePoint:", error);
            throw error;
        }
    }

    //getSalePointByName
    async getSalePointByIdUser(idUser){
        try {
            const response = await fetch(`${this.baseURL}/api/getSalePointByIdUser/${idUser}`, {
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
            console.error("Error fetching SalePoint:", error);
            throw error;
        }
    }

    //Create SalePoint
    async createSalePoint(salePoint){
        try {
            const response = await fetch(`${this.baseURL}/api/createSalePoint`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(salePoint)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return (true);
            
        } catch (error) {
            console.error("Error fetching SalePoint:", error);
            throw error;
        }
    }

    //Update SalePoint
    async updateSalePoint(salePoint){
        try {
            const response = await fetch(`${this.baseURL}/api/updateSalePoint`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(salePoint)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return (true);
            
        } catch (error) {
            console.error("Error fetching SalePoint:", error);
            throw error;
        }
    }


    //delete Product
    async deleteSalePoint(idSalePoint){
        try {
            const response = await fetch(`${this.baseURL}/api/deleteSalePoint/${idSalePoint}`, {
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
            console.error("Error fetching SalePoint:", error);
            throw error;
        }
    
    }
    
}