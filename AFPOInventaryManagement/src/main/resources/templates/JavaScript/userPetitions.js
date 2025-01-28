export class userService{

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
            const response = await fetch(`${this.baseURL}/api/deleteRole/${idUser}`, {
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