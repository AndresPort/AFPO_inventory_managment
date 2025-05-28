package AFPOInventaryManagement.Controllers;
import AFPOInventaryManagement.Models.Warehouse;
import AFPOInventaryManagement.Services.WarehouseServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class WarehouseController {
    //atributes
    @Autowired
    private WarehouseServices services;

    //metods
    //constructor
    public WarehouseController(WarehouseServices services) {
        this.services = services;
    }

    //create warehouse
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping("/api/createWarehouse")
    public void createWarehouse(@RequestBody Warehouse warehouse){
        services.createWarehouse(warehouse);

        //no voy a hacer que retorne un mensaje de confirmacion de tipo ResponseEntity.ok
        //porque igualmente por el manejo de exepciones del front end puedo saber si el
        // funcionamiento es correcto o no
    }

    //update warehouse
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PutMapping("/api/updateWarehouse")
    public void updateWarehouse(@RequestBody Warehouse warehouse) {
        services.updateWarehouse(warehouse);
    }

    //delete warehouse
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @DeleteMapping("/api/deleteWarehouse/{idWarehouse}")
    public void deleteWarehouse(@PathVariable Long idWarehouse) {
        services.deleteWarehouse(idWarehouse);
    }

    // get all warehouses
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getAllWarehouses")
    public List<Warehouse> getAllWarehouses(){
        return services.getAllWarehouses();
    }

}
