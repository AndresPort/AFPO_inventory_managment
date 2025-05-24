package AFPOInventaryManagement.Controllers;

import AFPOInventaryManagement.Models.RequestProductSupplier;
import AFPOInventaryManagement.Services.RequestProductSupplierServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RequestProductSupplierController {
    //atributes
    @Autowired
    private RequestProductSupplierServices services;

    //metods
    //constructor
    public RequestProductSupplierController(RequestProductSupplierServices services) {
        this.services = services;
    }

    //create requestProductSupplier
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping("/api/createRequestProductSupplier")
    public void createRequestProductSupplier(@RequestBody RequestProductSupplier requestProductSupplier){
        services.createRequestProductSupplier(requestProductSupplier);

        //no voy a hacer que retorne un mensaje de confirmacion de tipo ResponseEntity.ok
        //porque igualmente por el manejo de exepciones del front end puedo saber si el
        // funcionamiento es correcto o no
    }

    //update requestProductSupplier
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PutMapping("/api/updateRequestProductSupplier")
    public void updateRequestProductSupplier(@RequestBody RequestProductSupplier requestProductSupplier) {
        services.updateRequestProductSupplier(requestProductSupplier);
    }

    //delete requestProductSupplier
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @DeleteMapping("/api/deleteRequestProductSupplier/{idRequestProductSupplier}")
    public void deleteRequestProductSupplier(@PathVariable Long idRequestProductSupplier) {
        services.deleteRequestProductSupplier(idRequestProductSupplier);
    }

    // get all requestProductSuppliers
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getAllRequestProductSuppliers")
    public List<RequestProductSupplier> getAllRequestProductSuppliers(){
        return services.getAllRequestProductSuppliers();
    }


    //get requestProductSupplier by id
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getRequestProductSupplierById/{idRequestProductSupplier}")
    public RequestProductSupplier getRequestProductSupplierById(@PathVariable Long idRequestProductSupplier) {
        return services.getRequestProductSupplierById(idRequestProductSupplier);
    }

    //get requestProductSupplier by idSupplier
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getRequestProductSupplierByIdSupplier/{idSupplier}")
    public RequestProductSupplier getRequestProductSupplierByIdSupplier(@PathVariable Long idSupplier) {
        return services.getRequestProductSupplierByIdSupplier(idSupplier);
    }

    //get requestProductSupplier by idSalePoint
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getRequestProductSupplierByIdSalePoint/{idSalePoint}")
    public RequestProductSupplier getRequestProductSupplierByIdSalePoint(@PathVariable Long idSalePoint) {
        return services.getRequestProductSupplierByIdSalePoint(idSalePoint);
    }

    //get requestProductSupplier by idWarehouse
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getRequestProductSupplierByIdWarehouse/{idWarehouse}")
    public RequestProductSupplier getRequestProductSupplierByIdWarehouse(@PathVariable Long idWarehouse) {
        return services.getRequestProductSupplierByIdWarehouse(idWarehouse);
    }
}
