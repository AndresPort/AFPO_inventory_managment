package AFPOInventaryManagement.Controllers;

import AFPOInventaryManagement.Models.WarehouseDetails;
import AFPOInventaryManagement.Services.WarehouseDetailsServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class WarehouseDetailsController {
    //atributes
    @Autowired
    private WarehouseDetailsServices services;

    //metods
    //constructor
    public WarehouseDetailsController(WarehouseDetailsServices services) {
        this.services = services;
    }

    //create warehouseDetails
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping("/api/createWarehouseDetails")
    public void createWarehouseDetails(@RequestBody WarehouseDetails warehouseDetails){
        services.createWarehouseDetails(warehouseDetails);

        //no voy a hacer que retorne un mensaje de confirmacion de tipo ResponseEntity.ok
        //porque igualmente por el manejo de exepciones del front end puedo saber si el
        // funcionamiento es correcto o no
    }

    //update warehouseDetails
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PutMapping("/api/updateWarehouseDetails")
    public void updateWarehouseDetails(@RequestBody WarehouseDetails warehouseDetails) {
        services.updateWarehouseDetails(warehouseDetails);
    }

    //delete warehouseDetails
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @DeleteMapping("/api/deleteWarehouseDetails/{idWarehouseDetails}")
    public void deleteWarehouseDetails(@PathVariable Long idWarehouseDetails) {
        services.deleteWarehouseDetails(idWarehouseDetails);
    }

    // get all warehouseDetailss
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getAllWarehouseDetails")
    public List<WarehouseDetails> getAllWarehouseDetails(){
        return services.getAllWarehouseDetailss();
    }


    //get warehouseDetails by id
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getWarehouseDetailsById/{idWarehouseDetails}")
    public WarehouseDetails getWarehouseDetailsById(@PathVariable Long idWarehouseDetails) {
        return services.getWarehouseDetailsById(idWarehouseDetails);
    }
}
