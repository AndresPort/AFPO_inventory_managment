package AFPOInventaryManagement.Controllers;

import AFPOInventaryManagement.Models.SalePoint;
import AFPOInventaryManagement.Services.SalePointServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SalePointController {
    //atributes
    @Autowired
    private SalePointServices services;

    //metods
    //constructor
    public SalePointController(SalePointServices services) {
        this.services = services;
    }

    //create salePoint
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping("/api/createSalePoint")
    public void createSalePoint(@RequestBody SalePoint salePoint){
        services.createSalePoint(salePoint);

        //no voy a hacer que retorne un mensaje de confirmacion de tipo ResponseEntity.ok
        //porque igualmente por el manejo de exepciones del front end puedo saber si el
        // funcionamiento es correcto o no
    }

    //update salePoint
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PutMapping("/api/updateSalePoint")
    public void updateSalePoint(@RequestBody SalePoint salePoint) {
        services.updateSalePoint(salePoint);
    }

    //delete salePoint
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @DeleteMapping("/api/deleteSalePoint/{idSalePoint}")
    public void deleteSalePoint(@PathVariable Long idSalePoint) {
        services.deleteSalePoint(idSalePoint);
    }

    // get all salePoints
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getAllSalePoints")
    public List<SalePoint> getAllSalePoints(){
        return services.getAllSalePoints();
    }

    //get salePoint by idUser
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getSalePointByIdUser/{idUser}")
    public SalePoint getSalePointByIdUser(@PathVariable Long idUser) {
        return services.getSalePointByIdUser(idUser);
    }

    //get salePoint by id
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getSalePointById/{idSalePoint}")
    public SalePoint getSalePointById(@PathVariable Long idSalePoint) {
        return services.getSalePointById(idSalePoint);
    }
}
