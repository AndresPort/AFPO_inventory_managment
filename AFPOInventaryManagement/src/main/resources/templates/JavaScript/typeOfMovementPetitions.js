export class TypeOfMovementService{

    //constructor
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    //CRUD Metods

    //getAllTypeOfMovements

    async getAllTypeOfMovements() {
        try {
            const response = await fetch(`${this.baseURL}/api/getAllTypeOfMovements`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const typeOfMovements = await response.json();
            return typeOfMovements;
        } catch (error) {
            console.error("Error fetching typeOfMovements:", error);
            throw error;
        }
    }

    //get typeOfMovement by id
    async getTypeOfMovementById(idTypeOfMovement) {
        try {  
            const response = await fetch(`${this.baseURL}/api/getTypeOfMovementById/${idTypeOfMovement}`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            const typeOfMovement = await response.json();
            return typeOfMovement;
        } catch (error) {
            console.error("Error fetching typeOfMovements:", error);
            throw error;
        }
    }


    //Create typeOfMovement
    async createTypeOfMovement(movementName){
        try {
            const response = await fetch(`${this.baseURL}/api/createTypeOfMovement/${movementName}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return (true);
            
        } catch (error) {
            console.error("Error fetching TypeOfMovements:", error);
            throw error;
        }
    }

    //Update typeOfMovement
    async updateTypeOfMovement(typeOfMovement){
        try {
            const response = await fetch(`${this.baseURL}/api/updateTypeOfMovement`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(typeOfMovement)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return (true);
            
        } catch (error) {
            console.error("Error fetching typeOfMovements:", error);
            throw error;
        }
    }


    //delete rol
    async deleteTypeOfMovement(idTypeOfMovement){
        try {
            const response = await fetch(`${this.baseURL}/api/deleteTypeOfMovement/${idTypeOfMovement}`, {
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
            console.error("Error fetching typeOfMovements:", error);
            throw error;
        }
    
    }
    
}