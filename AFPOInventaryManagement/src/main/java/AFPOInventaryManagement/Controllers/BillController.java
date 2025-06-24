package AFPOInventaryManagement.Controllers;

import AFPOInventaryManagement.Models.Bill;
import AFPOInventaryManagement.Services.BillServices;
import org.springframework.beans.factory.annotation.Autowired;
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
    public void createBill(@RequestBody Bill Bill){
        services.createBill(Bill);

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

    // get all Bill
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getAllBill")
    public List<Bill> getAllBill(){
        return services.getAllBills();
    }
}
