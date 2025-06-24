package AFPOInventaryManagement.Services;

import AFPOInventaryManagement.Models.Bill;
import AFPOInventaryManagement.Repositories.BillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BillServices {
    //atributes
    @Autowired
    private BillRepository repository;
    //metods

    //constructor

    public BillServices(BillRepository repository) {
        this.repository = repository;
    }

    //create Bill
    public void createBill(Bill bill){
        repository.save(bill);
    }

    //update bill
    public void updateBill (Bill bill){
        if(bill.getIdBill() != null && repository.existsById(bill.getIdBill())){
            repository.save(bill);
        }
    }

    //delete bill
    public void deleteBill (Long idBill){
        if(idBill != null && repository.existsById(idBill)){
            repository.deleteById(idBill);
        }
    }

    // get all bills

    public List<Bill> getAllBills(){
        return repository.findAll();
    }

    //get bill by id
    public Bill getBillById(Long idBill){
        if(idBill != null && repository.existsById(idBill)){
            Optional<Bill> bill= repository.findById(idBill);
            return bill.orElse(null);
        }
        return null;
    }
}
