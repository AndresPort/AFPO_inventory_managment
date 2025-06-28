package AFPOInventaryManagement.Controllers;


import AFPOInventaryManagement.Models.PaymentMethod;
import AFPOInventaryManagement.Services.PaymentMethodServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PaymentMethodController {
    //atributes
    @Autowired
    private PaymentMethodServices services;

    //metods
    //constructor
    public PaymentMethodController(PaymentMethodServices services) {
        this.services = services;
    }

    //create paymentMethod
    @CrossOrigin(origins = "http://127.0.0.1:5500")
        @PostMapping("/api/createPaymentMethod/{methodName}")
    public void createPaymentMethod(@PathVariable String methodName){
        System.out.println(methodName);
        PaymentMethod paymentMethod = new PaymentMethod();  // Se crea una nueva instancia
        paymentMethod.setMethodName(methodName);
        services.createPaymentMethod(paymentMethod);
    }

    //update paymentMethod
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PutMapping("/api/updatePaymentMethod")
    public void updatePaymentMethod(@RequestBody PaymentMethod paymentMethod) {
        services.updatePaymentMethod(paymentMethod);
    }

    //delete paymentMethod
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @DeleteMapping("/api/deletePaymentMethod/{idPaymentMethod}")
    public void deletePaymentMethod(@PathVariable Long idPaymentMethod) {
        services.deletePaymentMethod(idPaymentMethod);
    }

    // get all paymentMethod
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getAllPaymentMethods")
    public List<PaymentMethod> getAllPaymentMethods(){
        return services.getAllPaymentMethods();
    }


    //get paymentMethod by id
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getPaymentMethodById/{idPaymentMethod}")
    public PaymentMethod getPaymentMethodById(@PathVariable Long idPaymentMethod) {
        return services.getPaymentMethodById(idPaymentMethod);
    }
}
