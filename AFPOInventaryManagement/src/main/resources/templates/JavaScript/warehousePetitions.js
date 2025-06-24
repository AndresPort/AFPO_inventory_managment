export class WarehouseService{

    //constructor
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    //CRUD Metods

    //getAllWarehouses

    async getAllWarehouse() {
        try {
            const response = await fetch(`${this.baseURL}/api/getAllWarehouses`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const warehouses = await response.json();
            return warehouses;
        } catch (error) {
            console.error("Error fetching warehouses:", error);
            throw error;
        }
    }

    //getWarehouseById
    async getWarehouseById(idWarehouse){
        try {
            const response = await fetch(`${this.baseURL}/api/getWarehouseById/${idWarehouse}`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const warehouse = await response.json();
            return warehouse;
        } catch (error) {
            console.error("Error fetching warehouse:", error);
            throw error;
        }
    }


    //Create warehouse
    async createWarehouse(warehouse){
        try {
            const response = await fetch(`${this.baseURL}/api/createWarehouse`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(warehouse)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return (true);
            
        } catch (error) {
            console.error("Error fetching warehouses:", error);
            throw error;
        }
    }

    //Update warehouse
    async updateWarehouse(warehouse){
        try {
            const response = await fetch(`${this.baseURL}/api/updateWarehouse`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(warehouse)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return (true);
            
        } catch (error) {
            console.error("Error fetching warehouses:", error);
            throw error;
        }
    }


    //delete warehouse
    async deleteWarehouse(idWarehouse){
        try {
            const response = await fetch(`${this.baseURL}/api/deleteWarehouse/${idWarehouse}`, {
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
            console.error("Error fetching warehouses:", error);
            throw error;
        }
    
    }
    
}