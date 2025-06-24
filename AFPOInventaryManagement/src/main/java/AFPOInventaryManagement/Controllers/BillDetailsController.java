package AFPOInventaryManagement.Controllers;

import AFPOInventaryManagement.Models.BillDetails;
import AFPOInventaryManagement.Services.BillDetailsServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BillDetailsController {
    //atributes
    @Autowired
    private BillDetailsServices services;

    //metods
    //constructor
    public BillDetailsController(BillDetailsServices services) {
        this.services = services;
    }

    //create billDetails
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping("/api/createBillDetails")
    public void createBillDetails(@RequestBody BillDetails billDetails){
        services.createBillDetails(billDetails);

        //no voy a hacer que retorne un mensaje de confirmacion de tipo ResponseEntity.ok
        //porque igualmente por el manejo de exepciones del front end puedo saber si el
        // funcionamiento es correcto o no
    }

    //update billDetails
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PutMapping("/api/updateBillDetails")
    public void updateBillDetails(@RequestBody BillDetails billDetails) {
        services.updateBillDetails(billDetails);
    }

    //delete billDetails
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @DeleteMapping("/api/deleteBillDetails/{idBillDetails}")
    public void deleteBillDetails(@PathVariable Long idBillDetails) {
        services.deleteBillDetails(idBillDetails);
    }

    // get all billDetails
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getAllBillDetails")
    public List<BillDetails> getAllBillDetails(){
        return services.getAllBillDetails();
    }


    //get billDetails by id
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getBillDetails/{idBillDetails}")
    public void getBillDetailsById(@PathVariable Long idBillDetails) {
        BillDetails billDetails = services.getBillDetailsById(idBillDetails);
    }
    
    //get billDetails by idBill
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getBillDetailsByIdBill/{idBill}")
    public List<BillDetails> getBillDetailsByIdBill(@PathVariable Long idBill) {
        return services.getBillDetailsByIdBill(idBill);
    }
}
