export class KardexService{

    //constructor
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    //CRUD Metods

    //getAllUsers

    async getAllKardex() {
        try {
            const response = await fetch(`${this.baseURL}/api/getAllKardex`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const kardex = await response.json();
            return kardex;
        } catch (error) {
            console.error("Error fetching users:", error);
            throw error;
        }
    }

    //getkardexById
    async getKardexById(idKardex){
        
        try {
            const response = await fetch(`${this.baseURL}/api/getKardexById/${idKardex}`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const kardex = await response.json();
            return kardex;
        } catch (error) {
            console.error("Error fetching user:", error);
            throw error;
        }
    }


    //getKardexByIdProduct
    async getKardexByIdProduct(idProduct){
        try {
            const peticion = await fetch("http://localhost:8080/api/getKardexByIdProduct/" + idProduct, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
            });
    
            if (peticion.ok) {
                const kardex = await peticion.json();
                return kardex;
            } else {
                alert("error al encontrar el kardex.");
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            alert("No se pudo conectar al servidor.");
        }
    }

    //getListKardexByIdCategory
    async getKardexByIdCategory(idCategory){
        try {
            const peticion = await fetch("http://localhost:8080/api/getKardexByIdCategory/" + idCategory, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
            });
    
            if (peticion.ok) {
                const listKardex = await peticion.json();
                return listKardex;
            } else {
                alert("error al encontrar el kardex.");
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            alert("No se pudo conectar al servidor.");
        }
    }

    //Create kardex
    async createKardex(kardex){
        try {
            const response = await fetch(`${this.baseURL}/api/createKardex`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                
                body: JSON.stringify(kardex)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return (true);
            
        } catch (error) {
            console.error("Error fetching users:", error);
            throw error;
        }
    }

    //Update kardex
    async updateKardex(kardex){
        try {
            const response = await fetch(`${this.baseURL}/api/updateKardex`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(kardex)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return (true);
            
        } catch (error) {
            console.error("Error fetching users:", error);
            throw error;
        }
    }


    //delete kardex
    async deleteKardex(idKardex){
        try {
            const response = await fetch(`${this.baseURL}/api/deleteKardex/${idKardex}`, {
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
            console.error("Error fetching users:", error);
            throw error;
        }
    
    }
    
}