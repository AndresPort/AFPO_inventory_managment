package AFPOInventaryManagement.Services;

import AFPOInventaryManagement.Models.Warehouse;
import AFPOInventaryManagement.Repositories.WarehouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WarehouseServices {
    //atributes
    @Autowired
    private WarehouseRepository repository;

    //metods
    //constructor
    public WarehouseServices(WarehouseRepository repository) {
        this.repository = repository;
    }

    //create warehouse

    public void createWarehouse(Warehouse warehouse){
        repository.save(warehouse);
    }

    //update warehouse
    public void updateWarehouse (Warehouse warehouse){
        if(warehouse.getIdWarehouse() != null && repository.existsById(warehouse.getIdWarehouse())){
            repository.save(warehouse);
        }
    }

    //delete warehouse
    public void deleteWarehouse (Long idWarehouse){
        if(idWarehouse != null && repository.existsById(idWarehouse)){
            repository.deleteById(idWarehouse);
        }
    }

    // get all warehouses
    public List<Warehouse> getAllWarehouses(){
        return repository.findAll();
    }


    //get warehouse by name
    public Warehouse getWarehouseByName (String name){
        if(name != null  ){
            Optional<Warehouse> warehouse= repository.findWarehouseByName(name);
            return warehouse.orElse(null);
        }
        return null;
    }

    
    
}
