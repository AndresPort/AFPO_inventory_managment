export class WarehouseDetailsService{

    //constructor
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    //CRUD Metods

    //getAllWarehouseDetails

    async getAllWarehouseDetails() {
        try {
            const response = await fetch(`${this.baseURL}/api/getAllWarehouseDetails`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const warehouseDetails = await response.json();
            return warehouseDetails;
        } catch (error) {
            console.error("Error fetching warehouseDetails:", error);
            throw error;
        }
    }

    //getWarehouseDetailsById
    async getWarehouseDetailsById(idWarehouseDetails){
        try {
            const response = await fetch(`${this.baseURL}/api/getWarehouseDetailsById/${idWarehouseDetails}`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const warehousedetails = await response.json();
            return warehousedetails;
        } catch (error) {
            console.error("Error fetching warehousedetails:", error);
            throw error;
        }
    }


    //Create warehousedetails
    async createWarehouseDetails(warehousedetails){
        try {
            const response = await fetch(`${this.baseURL}/api/createWarehouseDetails`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(warehousedetails)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return (true);
            
        } catch (error) {
            console.error("Error fetching warehousedetails:", error);
            throw error;
        }
    }

    //Update warehousedetails
    async updateWarehouseDetails(warehousedetails){
        try {
            const response = await fetch(`${this.baseURL}/api/updateWarehouseDetails`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(warehousedetails)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return (true);
            
        } catch (error) {
            console.error("Error fetching warehousedetails:", error);
            throw error;
        }
    }


    //delete warehousedetails
    async deleteWarehouseDetails(idWarehouseDetails){
        try {
            const response = await fetch(`${this.baseURL}/api/deleteWarehouseDetails/${idWarehouseDetails}`, {
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
            console.error("Error fetching warehousedetails:", error);
            throw error;
        }
    
    }
    
}