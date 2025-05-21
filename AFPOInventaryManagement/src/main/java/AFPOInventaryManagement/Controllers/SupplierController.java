package AFPOInventaryManagement.Controllers;

import AFPOInventaryManagement.Models.Supplier;
import AFPOInventaryManagement.Services.SupplierServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SupplierController {
    //atributes
    @Autowired
    private SupplierServices services;

    //metods
    //constructor
    public SupplierController(SupplierServices services) {
        this.services = services;
    }

    //create supplier
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping("/api/createSupplier")
    public void createSupplier(@RequestBody Supplier supplier){
        services.createSupplier(supplier);

        //no voy a hacer que retorne un mensaje de confirmacion de tipo ResponseEntity.ok
        //porque igualmente por el manejo de exepciones del front end puedo saber si el
        // funcionamiento es correcto o no
    }

    //update supplier
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PutMapping("/api/updateSupplier")
    public void updateSupplier(@RequestBody Supplier supplier) {
        services.updateSupplier(supplier);
    }

    //delete supplier
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @DeleteMapping("/api/deleteSupplier/{idSupplier}")
    public void deleteSupplier(@PathVariable Long idSupplier) {
        services.deleteSupplier(idSupplier);
    }

    // get all suppliers
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getAllSuppliers")
    public List<Supplier> getAllSuppliers(){
        return services.getAllSuppliers();
    }


    //get supplier by id
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getSupplierById/{idSupplier}")
    public Supplier getSupplierById(@PathVariable Long idSupplier) {
        return services.getSupplierById(idSupplier);
    }

    //get supplier by name
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getSupplierByName/{name}")
    public Supplier getSupplierByName(@PathVariable String name) {
        return services.getSupplierByName(name);
    }
}
