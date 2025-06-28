export class PaymentMethodService{

    //constructor
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    //CRUD Metods

    //getAllPaymentMethods

    async getAllPaymentMethods() {
        try {
            const response = await fetch(`${this.baseURL}/api/getAllPaymentMethods`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const paymentMethods = await response.json();
            return paymentMethods;
        } catch (error) {
            console.error("Error fetching paymentMethods:", error);
            throw error;
        }
    }

    //get paymentMethod by id
    async getPaymentMethodById(idPaymentMethod) {
        
        try {  
            const response = await fetch(`${this.baseURL}/api/getPaymentMethodById/${idPaymentMethod}`, {
                method: 'GET',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            const paymentMethod = await response.json();
            return paymentMethod;
        } catch (error) {
            console.error("Error fetching paymentMethods:", error);
            throw error;
        }
    }


    //Create paymentMethod
    async createPaymentMethod(methodName){
        try {
            const response = await fetch(`${this.baseURL}/api/createPaymentMethod/${methodName}`, {
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
            console.error("Error fetching PaymentMethods:", error);
            throw error;
        }
    }

    //Update paymentMethod
    async updatePaymentMethod(paymentMethod){
        try {
            const response = await fetch(`${this.baseURL}/api/updatePaymentMethod`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(paymentMethod)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return (true);
            
        } catch (error) {
            console.error("Error fetching paymentMethods:", error);
            throw error;
        }
    }


    //delete rol
    async deletePaymentMethod(idPaymentMethod){
        try {
            const response = await fetch(`${this.baseURL}/api/deletePaymentMethod/${idPaymentMethod}`, {
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
            console.error("Error fetching paymentMethods:", error);
            throw error;
        }
    
    }
    
}