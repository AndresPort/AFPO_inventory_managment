package AFPOInventaryManagement.Services;

import AFPOInventaryManagement.Models.WarehouseMovement;
import AFPOInventaryManagement.Repositories.WarehouseMovementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WarehouseMovementServices {
    //atributes
    @Autowired
    private WarehouseMovementRepository repository;

    //metods
    //constructor
    public WarehouseMovementServices(WarehouseMovementRepository repository) {
        this.repository = repository;
    }

    //create warehouseMovement
    public void createWarehouseMovement(WarehouseMovement warehouseMovement){
        repository.save(warehouseMovement);
    }

    //update warehouseMovement
    public void updateWarehouseMovement (WarehouseMovement warehouseMovement){
        if( warehouseMovement.getIdWarehouseMovement() != null && repository.existsById(warehouseMovement.getIdWarehouseMovement())){
            repository.save(warehouseMovement);
        }
    }

    //delete warehouseMovement
    public void deleteWarehouseMovement (Long idWarehouseMovement){
        if(idWarehouseMovement != null && repository.existsById(idWarehouseMovement)){
            repository.deleteById(idWarehouseMovement);
        }
    }

    // get all warehouseMovements
    public List<WarehouseMovement> getAllWarehouseMovements(){
        return repository.findAll();
    }
}
