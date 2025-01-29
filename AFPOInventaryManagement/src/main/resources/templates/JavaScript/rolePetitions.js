export class RoleService{

    //constructor
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    //CRUD Metods

    //getAllRoles

    async getAllRoles() {
        try {
            const response = await fetch(`${this.baseURL}/api/getAllRoles`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const roles = await response.json();
            return roles;
        } catch (error) {
            console.error("Error fetching roles:", error);
            throw error;
        }
    }

    //get role by id
    async getRoleById() {
        try {
            const response = await fetch(`${this.baseURL}/api/getRoleById`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const role = await response.json();
            return role;
        } catch (error) {
            console.error("Error fetching roles:", error);
            throw error;
        }
    }


    //Create role
    async createRole(rolName){
        try {
            const response = await fetch(`${this.baseURL}/api/createRole/${rolName}`, {
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
            console.log("Resultado del servidor:", result);
            return (true);
            
        } catch (error) {
            console.error("Error fetching roles:", error);
            throw error;
        }
    }
    //Update role
    async updateRole(role){
        try {
            const response = await fetch(`${this.baseURL}/api/updateRole`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(role)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return (true);
            
        } catch (error) {
            console.error("Error fetching roles:", error);
            throw error;
        }
    }


    //delete rol
    async deleteRole(idRole){
        try {
            const response = await fetch(`${this.baseURL}/api/deleteRole/${idRole}`, {
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
            console.error("Error fetching roles:", error);
            throw error;
        }
    
    }
    
}