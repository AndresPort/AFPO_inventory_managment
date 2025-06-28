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
    @GetMapping("/api/getKardexById/{idKardex}")
    public Kardex getKardexById(@PathVariable Long idKardex) {
        return services.getKardexById(idKardex);
    }

    //get kardex by idProduct
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getKardexByIdProduct/{idProduct}")
    public Kardex getKardexByIdProduct(@PathVariable Long idProduct) {
        return services.getKardexByProduct(idProduct);
    }

    //get kardex by idCategory
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getKardexByIdCategory/{idCategory}")
    public List<Kardex> getKardexByIdCategory(@PathVariable Long idCategory) {
        return services.getKardexByCategory(idCategory);
    }
}
