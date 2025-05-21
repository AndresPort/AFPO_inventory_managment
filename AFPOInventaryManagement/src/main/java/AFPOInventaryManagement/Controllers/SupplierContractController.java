package AFPOInventaryManagement.Controllers;

import AFPOInventaryManagement.Models.SupplierContract;
import AFPOInventaryManagement.Services.SupplierContractServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SupplierContractController {
    //atributes
    @Autowired
    private SupplierContractServices services;

    //metods
    //constructor
    public SupplierContractController(SupplierContractServices services) {
        this.services = services;
    }

    //create supplierContract
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping("/api/createSupplierContract")
    public void createSupplierContract(@RequestBody SupplierContract supplierContract){
        services.createSupplierContract(supplierContract);

        //no voy a hacer que retorne un mensaje de confirmacion de tipo ResponseEntity.ok
        //porque igualmente por el manejo de exepciones del front end puedo saber si el
        // funcionamiento es correcto o no
    }

    //update supplierContract
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PutMapping("/api/updateSupplierContract")
    public void updateSupplierContract(@RequestBody SupplierContract supplierContract) {
        services.updateSupplierContract(supplierContract);
    }

    //delete supplierContract
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @DeleteMapping("/api/deleteSupplierContract/{idSupplierContract}")
    public void deleteSupplierContract(@PathVariable Long idSupplierContract) {
        services.deleteSupplierContract(idSupplierContract);
    }

    // get all supplierContracts
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getAllSupplierContracts")
    public List<SupplierContract> getAllSupplierContracts(){
        return services.getAllSupplierContracts();
    }


    //get supplierContract by id
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getSupplierContractById/{idSupplierContract}")
    public SupplierContract getSupplierContractById(@PathVariable Long idSupplierContract) {
        return services.getSupplierContractById(idSupplierContract);
    }

    //get supplierContract by idSupplier
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getSupplierContractByIdSupplier/{idSupplier}")
    public SupplierContract getSupplierContractByIdSupplier(@PathVariable Long idSupplier) {
        return services.getSupplierContractByIdSupplier(idSupplier);
    }

    //get supplierContract by idSalePoint
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getSupplierContractByIdSalePoint/{idSalePoint}")
    public SupplierContract getSupplierContractByIdSalePoint(@PathVariable Long idSalePoint) {
        return services.getSupplierContractByIdSalePoint(idSalePoint);
    }

}
