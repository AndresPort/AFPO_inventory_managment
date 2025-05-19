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
    @PostMapping("/api/createTypeOfMovement")
    public void createTypeOfMovement(@RequestBody TypeOfMovement typeOfMovement){
        services.createTypeOfMovement(typeOfMovement);

        //no voy a hacer que retorne un mensaje de confirmacion de tipo ResponseEntity.ok
        //porque igualmente por el manejo de exepciones del front end puedo saber si el
        // funcionamiento es correcto o no
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
    @GetMapping("/api/getAllTypeOfMovement")
    public List<TypeOfMovement> getAllTypeOfMovement(){
        return services.getAllTypeOfMovement();
    }


    //get typeOfMovement by id
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getTypeOfMovement/{idTypeOfMovement}")
    public void getTypeOfMovementById(@PathVariable Long idTypeOfMovement) {
        TypeOfMovement typeOfMovement = services.getTypeOfMovementById(idTypeOfMovement);
    }
}
