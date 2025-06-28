package AFPOInventaryManagement.Controllers;

import AFPOInventaryManagement.Models.Bill;
import AFPOInventaryManagement.Services.BillServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BillController {
    //atributes
    @Autowired
    private BillServices services;

    //metods
    //constructor
    public BillController(BillServices services) {
        this.services = services;
    }

    //create Bill
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping("/api/createBill")
    public ResponseEntity<Long> createBill(@RequestBody Bill Bill){
        Long idGenerated = services.createBill(Bill);
        return ResponseEntity.ok(idGenerated);

        //no voy a hacer que retorne un mensaje de confirmacion de tipo ResponseEntity.ok
        //porque igualmente por el manejo de exepciones del front end puedo saber si el
        // funcionamiento es correcto o no
    }

    //update Bill
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PutMapping("/api/updateBill")
    public void updateBill(@RequestBody Bill Bill) {
        services.updateBill(Bill);
    }

    //delete Bill
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @DeleteMapping("/api/deleteBill/{idBill}")
    public void deleteBill(@PathVariable Long idBill) {
        services.deleteBill(idBill);
    }

    // get all Bills
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getAllBills")
    public List<Bill> getAllBills(){
        return services.getAllBills();
    }
}
