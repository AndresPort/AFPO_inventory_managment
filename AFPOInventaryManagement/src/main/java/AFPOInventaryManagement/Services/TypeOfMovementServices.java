package AFPOInventaryManagement.Services;


import AFPOInventaryManagement.Models.TypeOfMovement;
import AFPOInventaryManagement.Repositories.TypeOfMovementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TypeOfMovementServices {
    //atributes
    @Autowired
    private TypeOfMovementRepository repository;
    //methods

    //constructor

    public TypeOfMovementServices(TypeOfMovementRepository repository) {
        this.repository = repository;
    }

    //crud
    //create typeOfMovement
    public void createTypeOfMovement(TypeOfMovement typeOfMovement){
        repository.save(typeOfMovement);
    }

    //update typeOfMovement
    public void updateTypeOfMovement (TypeOfMovement typeOfMovement){
        if(typeOfMovement.getIdTypeOfMovement() != null && repository.existsById(typeOfMovement.getIdTypeOfMovement())){
            repository.save(typeOfMovement);
        }
    }

    //delete typeOfMovement
    public void deleteTypeOfMovement (Long idTypeOfMovement){
        if(idTypeOfMovement != null && repository.existsById(idTypeOfMovement)){
            repository.deleteById(idTypeOfMovement);
        }
    }

    // get all typeOfMovement

    public List<TypeOfMovement> getAllTypeOfMovements(){
        return repository.findAll();
    }

    //get typeOfMovement by id
    public TypeOfMovement getTypeOfMovementById(Long idTypeOfMovement){
        if(idTypeOfMovement != null && repository.existsById(idTypeOfMovement)){
            Optional<TypeOfMovement> typeOfMovement= repository.findById(idTypeOfMovement);
            return typeOfMovement.orElse(null);
        }

        return null;
    }
    
}

