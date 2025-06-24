export class BillService{

    //constructor
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    //CRUD Metods

    //getAllUsers

    async getAllBill() {
        try {
            const response = await fetch(`${this.baseURL}/api/getAllBill`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const bill = await response.json();
            return bill;
        } catch (error) {
            console.error("Error fetching users:", error);
            throw error;
        }
    }

    //getUserById
    async getBillById(idBill){
        try {
            const response = await fetch(`${this.baseURL}/api/getBillById/${idBill}`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const bill = await response.json();
            return bill;
        } catch (error) {
            console.error("Error fetching user:", error);
            throw error;
        }
    }

    // //getBillByIdProduct
    // async getBillByIdProduct(idProduct){
    //     try {
    //         const peticion = await fetch("http://localhost:8080/api/getBillByIdProduct/" + idProduct, {
    //             method: "GET",
    //             headers: {
    //                 "Accept": "application/json",
    //                 "Content-Type": "application/json",
    //             },
    //         });
    
    //         if (peticion.ok) {
    //             const bill = await peticion.json();
    //             return bill;
    //         } else {
    //             alert("error al encontrar el bill.");
    //         }
    //     } catch (error) {
    //         console.error("Error en la solicitud:", error);
    //         alert("No se pudo conectar al servidor.");
    //     }
    // }

    //Create bill
    async createBill(bill){
        try {
            const response = await fetch(`${this.baseURL}/api/createBill`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                
                body: JSON.stringify(bill)
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

    //Update bill
    async updateBill(bill){
        try {
            const response = await fetch(`${this.baseURL}/api/updateBill`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bill)
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


    //delete bill
    async deleteBill(idBill){
        try {
            const response = await fetch(`${this.baseURL}/api/deleteBill/${idBill}`, {
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