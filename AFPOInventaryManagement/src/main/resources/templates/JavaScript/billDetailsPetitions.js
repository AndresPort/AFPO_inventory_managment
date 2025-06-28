export class BillDetailsService{

    //constructor
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    //CRUD Metods

    //getAllBillDetails

    async getAllBillDetails() {
        try {
            const response = await fetch(`${this.baseURL}/api/getAllBillDetails`, {
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

    //getBillDetailsById
    async getBillById(idBillDetails){
        try {
            const response = await fetch(`${this.baseURL}/api/getBillDetailsById/${idBillDetails}`, {
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

    //getBillDetailsByIdBil
    async getBillDetailsByIdBill(idBill){
        try {
            const peticion = await fetch("http://localhost:8080/api/getBillDetailsByIdBill/" + idBill, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
            });
    
            if (peticion.ok) {
                const bill = await peticion.json();
                return bill;
            } else {
                alert("error al encontrar el bill.");
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            alert("No se pudo conectar al servidor.");
        }
    }

    //Create bill
    async createBillDetails(billDetails){
        try {
            const response = await fetch(`${this.baseURL}/api/createBillDetails`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                
                body: JSON.stringify(billDetails)
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
    async updateBillDetails(billDetails){
        try {
            const response = await fetch(`${this.baseURL}/api/updateBillDetails`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(billDetails)
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
    async deleteBillDetails(idBillDetails){
        try {
            const response = await fetch(`${this.baseURL}/api/deleteBillDetails/${idBillDetails}`, {
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