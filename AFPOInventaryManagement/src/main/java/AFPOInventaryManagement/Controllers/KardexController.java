package AFPOInventaryManagement.Controllers;


import AFPOInventaryManagement.Models.Kardex;
import AFPOInventaryManagement.Services.KardexServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class KardexController {
    //atributes
    @Autowired
    private KardexServices services;

    //metods
    //constructor
    public KardexController(KardexServices services) {
        this.services = services;
    }

    //create kardex
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping("/api/createKardex")
    public void createKardex(@RequestBody Kardex kardex){
        services.createKardex(kardex);

        //no voy a hacer que retorne un mensaje de confirmacion de tipo ResponseEntity.ok
        //porque igualmente por el manejo de exepciones del front end puedo saber si el
        // funcionamiento es correcto o no
    }

    //update kardex
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PutMapping("/api/updateKardex")
    public void updateKardex(@RequestBody Kardex kardex) {
        services.updateKardex(kardex);
    }

    //delete kardex
    @CrossOrigin(origins = "http://127.0.0.1:5500") 
    @DeleteMapping("/api/deleteKardex/{idKardex}")
    public void deleteKardex(@PathVariable Long idKardex) {
        services.deleteKardex(idKardex);
    }

    // get all kardex
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getAllKardex")
    public List<Kardex> getAllKardex(){
        return services.getAllKardex();
    }


    //get kardex by id
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getKardex/{idKardex}")
    public void getKardexById(@PathVariable Long idKardex) {
        Kardex kardex = services.getKardexById(idKardex);
    }

    //get kardex by name
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getKardexByCategory/{category}")
    public Kardex getKardexByCategory(@PathVariable String category) {
        return services.getKardexByCategory(category);
    }
}
