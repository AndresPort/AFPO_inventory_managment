package AFPOInventaryManagement.Services;

import AFPOInventaryManagement.Models.SupplierContract;
import AFPOInventaryManagement.Repositories.SupplierContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SupplierContractServices {
    //atributes
    @Autowired
    private SupplierContractRepository repository;
    //metods

    //constructor
    public SupplierContractServices(SupplierContractRepository repository) {
        this.repository = repository;
    }

    //create supplierContract

    public void createSupplierContract(SupplierContract supplierContract){
        repository.save(supplierContract);
    }

    //update supplierContract
    public void updateSupplierContract (SupplierContract supplierContract){
        if(supplierContract.getIdSupplierContract() != null && repository.existsById(supplierContract.getIdSupplierContract())){
            repository.save(supplierContract);
        }
    }

    //delete supplierContract
    public void deleteSupplierContract (Long idSupplierContract){
        if(idSupplierContract != null && repository.existsById(idSupplierContract)){
            repository.deleteById(idSupplierContract);
        }
    }

    // get all supplierContracts

    public List<SupplierContract> getAllSupplierContracts(){
        return repository.findAll();
    }

    //get supplierContract by id
    public SupplierContract getSupplierContractById(Long idSupplierContract){
        if(idSupplierContract != null && repository.existsById(idSupplierContract)){
            Optional<SupplierContract> supplierContract= repository.findById(idSupplierContract);
            return supplierContract.orElse(null);
        }

        return null;
    }

    //get supplierContract by idSupplier

    public SupplierContract getSupplierContractByIdSupplier (Long idSupplier){
        if(idSupplier != null  ){
            Optional<SupplierContract> supplierContract= repository.findSupplierContractByIdSupplier(idSupplier);
            return supplierContract.orElse(null);
        }
        return null;
    }

    //get supplierContract by idSalePoint

    public SupplierContract getSupplierContractByIdSalePoint (Long idSalePoint){
        if(idSalePoint != null  ){
            Optional<SupplierContract> supplierContract= repository.findSupplierContractByIdSalePoint(idSalePoint);
            return supplierContract.orElse(null);
        }
        return null;
    }
}
