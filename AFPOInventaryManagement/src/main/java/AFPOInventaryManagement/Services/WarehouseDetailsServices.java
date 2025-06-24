package AFPOInventaryManagement.Services;

import AFPOInventaryManagement.Models.WarehouseDetails;
import AFPOInventaryManagement.Repositories.WarehouseDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WarehouseDetailsServices {
    //atributes
    @Autowired
    private WarehouseDetailsRepository repository;
    //metods

    //constructor
    public WarehouseDetailsServices(WarehouseDetailsRepository repository) {
        this.repository = repository;
    }

    //create warehouseDetails

    public void createWarehouseDetails(WarehouseDetails warehouseDetails){
        repository.save(warehouseDetails);
    }

    //update warehouseDetails
    public void updateWarehouseDetails (WarehouseDetails warehouseDetails){
        if(warehouseDetails.getIdWarehouseDetails() != null && repository.existsById(warehouseDetails.getIdWarehouseDetails())){
            repository.save(warehouseDetails);
        }
    }

    //delete warehouseDetails
    public void deleteWarehouseDetails (Long idWarehouseDetails){
        if(idWarehouseDetails != null && repository.existsById(idWarehouseDetails)){
            repository.deleteById(idWarehouseDetails);
        }
    }

    // get all warehouseDetailss

    public List<WarehouseDetails> getAllWarehouseDetailss(){
        return repository.findAll();
    }

    //get warehouseDetails by id
    public WarehouseDetails getWarehouseDetailsById(Long idWarehouseDetails){
        if(idWarehouseDetails != null && repository.existsById(idWarehouseDetails)){
            Optional<WarehouseDetails> warehouseDetails= repository.findById(idWarehouseDetails);
            return warehouseDetails.orElse(null);
        }

        return null;
    }

}
