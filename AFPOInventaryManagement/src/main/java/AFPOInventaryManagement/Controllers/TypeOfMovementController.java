package AFPOInventaryManagement.Controllers;

import AFPOInventaryManagement.Models.TypeOfMovement;
import AFPOInventaryManagement.Services.TypeOfMovementServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TypeOfMovementController {
    //atributes
    @Autowired
    private TypeOfMovementServices services;

    //metods
    //constructor
    public TypeOfMovementController(TypeOfMovementServices services) {
        this.services = services;
    }

    //create typeOfMovement
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping("/api/createTypeOfMovement/{ovementName}")
    public void createTypeOfMovement(@PathVariable String ovementName){
        TypeOfMovement paymentMethod = new TypeOfMovement();  // Se crea una nueva instancia
        paymentMethod.setMovementName(ovementName);
        services.createTypeOfMovement(paymentMethod);
    }

    //update typeOfMovement
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PutMapping("/api/updateTypeOfMovement")
    public void updateTypeOfMovement(@RequestBody TypeOfMovement typeOfMovement) {
        services.updateTypeOfMovement(typeOfMovement);
    }

    //delete typeOfMovement
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @DeleteMapping("/api/deleteTypeOfMovement/{idTypeOfMovement}")
    public void deleteTypeOfMovement(@PathVariable Long idTypeOfMovement) {
        services.deleteTypeOfMovement(idTypeOfMovement);
    }

    // get all typeOfMovement
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getAllTypeOfMovements")
    public List<TypeOfMovement> getAllTypeOfMovements(){
        return services.getAllTypeOfMovements();
    }


    //get typeOfMovement by id
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getTypeOfMovementById/{idTypeOfMovement}")
    public TypeOfMovement getTypeOfMovementById(@PathVariable Long idTypeOfMovement) {
        return services.getTypeOfMovementById(idTypeOfMovement);

    }
}
