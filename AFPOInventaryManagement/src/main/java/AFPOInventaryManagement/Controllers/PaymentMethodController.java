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
    @PostMapping("/api/createPaymentMethod")
    public void createPaymentMethod(@RequestBody PaymentMethod paymentMethod){
        services.createPaymentMethod(paymentMethod);

        //no voy a hacer que retorne un mensaje de confirmacion de tipo ResponseEntity.ok
        //porque igualmente por el manejo de exepciones del front end puedo saber si el
        // funcionamiento es correcto o no
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
    @GetMapping("/api/getAllPaymentMethod")
    public List<PaymentMethod> getAllPaymentMethod(){
        return services.getAllPaymentMethod();
    }


    //get paymentMethod by id
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getPaymentMethod/{idPaymentMethod}")
    public void getPaymentMethodById(@PathVariable Long idPaymentMethod) {
        PaymentMethod paymentMethod = services.getPaymentMethodById(idPaymentMethod);
    }
}
