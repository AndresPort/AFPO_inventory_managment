package AFPOInventaryManagement.Services;

import AFPOInventaryManagement.Models.SalePoint;
import AFPOInventaryManagement.Repositories.SalePointRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SalePointServices {
    //atributes
    @Autowired
    private SalePointRepository repository;
    //metods

    //constructor
    public SalePointServices(SalePointRepository repository) {
        this.repository = repository;
    }

    //create salePoint
    public void createSalePoint(SalePoint salePoint){
        repository.save(salePoint);
    }

    //update salePoint
    public void updateSalePoint (SalePoint salePoint){
        if(salePoint.getIdSalePoint() != null && repository.existsById(salePoint.getIdSalePoint())){
            repository.save(salePoint);
        }
    }

    //delete salePoint
    public void deleteSalePoint (Long idSalePoint){
        if(idSalePoint != null && repository.existsById(idSalePoint)){
            repository.deleteById(idSalePoint);
        }
    }

    // get all salePoints
    public List<SalePoint> getAllSalePoints(){
        return repository.findAll();
    }


    //get salePoint by idUser
    public SalePoint getSalePointByIdUser (Long idUser){
        if(idUser != null){
            Optional<SalePoint> salePoint= repository.findSalePointByIdUser(idUser);
            return salePoint.orElse(null);
        }
        return null;
    }

    //get salePoint by id
    public SalePoint getSalePointById (Long idSalePoint){
        if(idSalePoint != null){
            Optional<SalePoint> salePoint= repository.findById(idSalePoint);
            return salePoint.orElse(null);
        }
        return null;
    }
}
