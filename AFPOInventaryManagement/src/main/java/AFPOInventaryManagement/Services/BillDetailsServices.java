package AFPOInventaryManagement.Services;

import AFPOInventaryManagement.Models.BillDetails;
import AFPOInventaryManagement.Models.Kardex;
import AFPOInventaryManagement.Repositories.BillDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class BillDetailsServices {
    //atributes
    @Autowired
    private BillDetailsRepository repository;

    //constructor

    public BillDetailsServices(BillDetailsRepository repository) {
        this.repository = repository;
    }

    //crud
    //create billDetails
    public void createBillDetails(BillDetails billDetails){
        repository.save(billDetails);
    }

    //update billDetails
    public void updateBillDetails (BillDetails billDetails){
        if(billDetails.getIdBillDetails() != null && repository.existsById(billDetails.getIdBillDetails())){
            repository.save(billDetails);
        }
    }

    //delete billDetails
    public void deleteBillDetails (Long idBillDetails){
        if(idBillDetails != null && repository.existsById(idBillDetails)){
            repository.deleteById(idBillDetails);
        }
    }

    // get all billDetails

    public List<BillDetails> getAllBillDetails(){
        return repository.findAll();
    }

    //get billDetails by id
    public BillDetails getBillDetailsById(Long idBillDetails){
        if(idBillDetails != null && repository.existsById(idBillDetails)){
            Optional<BillDetails> billDetails= repository.findById(idBillDetails);
            return billDetails.orElse(null);
        }

        return null;
    }

    //get billDetails by IdBill

    public List<BillDetails> getBillDetailsByIdBill(Long idBill){
        if(idBill != null  ){
            List<BillDetails> BillDetailsList= repository.findBillDetailsByIdBill(idBill);
            return BillDetailsList.isEmpty() ? Collections.emptyList() : BillDetailsList;
        }
        return Collections.emptyList();
    }
}
