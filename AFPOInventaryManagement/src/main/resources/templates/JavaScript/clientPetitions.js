export class ClientService{

    //constructor
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    //CRUD Metods

    //getAllClients

    async getAllClients() {
        try {
            const response = await fetch(`${this.baseURL}/api/getAllClients`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const clients = await response.json();
            return clients;
        } catch (error) {
            console.error("Error fetching Clients:", error);
            throw error;
        }
    }

    //getClientByCedula
    async getClientByCedula(cedula){
        console.log("Fetching client by cedula:", cedula);
        try {
            const response = await fetch(`${this.baseURL}/api/getClientByCedula/${cedula}`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const client = await response.json();
            return client;
        } catch (error) {
            console.error("Error fetching Client:", error);
            throw error;
        }
    }

    //getClientById
    async getClientById(idClient){
        try {
            const response = await fetch(`${this.baseURL}/api/getClientById/${idClient}`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const client = await response.json();
            return client;
        } catch (error) {
            console.error("Error fetching Client:", error);
            throw error;
        }
    }

    //Create Client
    async createClient(client){
        try {
            const response = await fetch(`${this.baseURL}/api/createClient`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(client)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return (true);
            
        } catch (error) {
            console.error("Error fetching Clients:", error);
            throw error;
        }
    }

    //Update Client
    async updateClient(client){
        try {
            const response = await fetch(`${this.baseURL}/api/updateClient`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(client)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return (true);
            
        } catch (error) {
            console.error("Error fetching Clients:", error);
            throw error;
        }
    }


    //delete Client
    async deleteClient(idClient){
        try {
            const response = await fetch(`${this.baseURL}/api/deleteClient/${idClient}`, {
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
            console.error("Error fetching Clients:", error);
            throw error;
        }
    
    }
    
}