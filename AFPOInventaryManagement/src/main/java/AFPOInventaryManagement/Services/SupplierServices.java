package AFPOInventaryManagement.Services;

import AFPOInventaryManagement.Models.Supplier;
import AFPOInventaryManagement.Repositories.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SupplierServices {
    //atributes
    @Autowired
    private SupplierRepository repository;
    //metods

    //constructor
    public SupplierServices(SupplierRepository repository) {
        this.repository = repository;
    }

    //create supplier

    public void createSupplier(Supplier supplier){
        repository.save(supplier);
    }

    //update supplier
    public void updateSupplier (Supplier supplier){
        if(supplier.getIdSupplier() != null && repository.existsById(supplier.getIdSupplier())){
            repository.save(supplier);
        }
    }

    //delete supplier
    public void deleteSupplier (Long idSupplier){
        if(idSupplier != null && repository.existsById(idSupplier)){
            repository.deleteById(idSupplier);
        }
    }

    // get all suppliers

    public List<Supplier> getAllSuppliers(){
        return repository.findAll();
    }

    //get supplier by id
    public Supplier getSupplierById(Long idSupplier){
        if(idSupplier != null && repository.existsById(idSupplier)){
            Optional<Supplier> supplier= repository.findById(idSupplier);
            return supplier.orElse(null);
        }

        return null;
    }

    //get supplier by name

    public Supplier getSupplierByName (String name){
        if(name != null  ){
            Optional<Supplier> supplier= repository.findSupplierByName(name);
            return supplier.orElse(null);
        }
        return null;
    }

}
