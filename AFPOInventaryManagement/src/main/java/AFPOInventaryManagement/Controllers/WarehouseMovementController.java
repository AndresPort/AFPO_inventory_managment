package AFPOInventaryManagement.Controllers;
import AFPOInventaryManagement.Services.WarehouseMovementServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import AFPOInventaryManagement.Models.WarehouseMovement;
import java.util.List;

@RestController
public class WarehouseMovementController {
    //atributes
    @Autowired
    private WarehouseMovementServices services;

    //metods
    //constructor
    public WarehouseMovementController(WarehouseMovementServices services) {
        this.services = services;
    }

    //CRUD
    //Create WarehouseMovement
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping("/api/createWarehouseMovement/{movementName}")
    public void createWarehouseMovement(@PathVariable String movementName){
        WarehouseMovement warehouseMovement = new WarehouseMovement();  // Se crea una nueva instancia
        warehouseMovement.setMovementName(movementName);
        services.createWarehouseMovement(warehouseMovement);
    }

    //Update WarehouseMovement
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PutMapping("/api/updateWarehouseMovement")
    public void updateWarehouseMovement(@RequestBody WarehouseMovement warehouseMovement) {
        services.updateWarehouseMovement(warehouseMovement);
    }

    //DeleteWarehouseMovement
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @DeleteMapping("/api/deleteWarehouseMovement/{idWarehouseMovement}")
    public void deleteWarehouseMovement(@PathVariable Long idWarehouseMovement) {
        services.deleteWarehouseMovement(idWarehouseMovement);
    }

    //get all warehouseMovements
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getAllWarehouseMovements")
    public List<WarehouseMovement> getAllWarehouseMovements(){
        return services.getAllWarehouseMovements();
    }
}
