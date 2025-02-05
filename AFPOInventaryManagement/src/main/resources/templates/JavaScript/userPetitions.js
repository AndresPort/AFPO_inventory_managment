export class UserService{

    //constructor
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    //CRUD Metods

    //getAllUsers

    async getAllUsers() {
        try {
            const response = await fetch(`${this.baseURL}/api/getAllUsers`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const users = await response.json();
            return users;
        } catch (error) {
            console.error("Error fetching users:", error);
            throw error;
        }
    }

    //getUserById
    async getUserById(idUser){
        try {
            const response = await fetch(`${this.baseURL}/api/getAllUsers/${idUser}`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const user = await response.json();
            return user;
        } catch (error) {
            console.error("Error fetching user:", error);
            throw error;
        }
    }


    //getUserByUserCode
    async getUserByUserCode(userCode){
        try {
            const peticion = await fetch("http://localhost:8080/api/getUserByUserCode/" + userCode, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
            });
    
            if (peticion.ok) {
                const usuario = await peticion.json();
                return usuario;
            } else {
                alert("error al encontrar al usuario.");
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            alert("No se pudo conectar al servidor.");
        }
    }

    //Create user
    async createUser(user){
        try {
            const response = await fetch(`${this.baseURL}/api/createUser`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
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

    //Update user
    async updateUser(user){
        try {
            const response = await fetch(`${this.baseURL}/api/updateUser`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
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


    //delete user
    async deleteUser(idUser){
        try {
            const response = await fetch(`${this.baseURL}/api/deleteUser/${idUser}`, {
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