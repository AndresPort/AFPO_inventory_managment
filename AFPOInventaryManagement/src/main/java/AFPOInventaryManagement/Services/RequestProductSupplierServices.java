package AFPOInventaryManagement.Services;

import AFPOInventaryManagement.Models.RequestProductSupplier;
import AFPOInventaryManagement.Repositories.RequestProductSupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RequestProductSupplierServices {
    //atributes
    @Autowired
    private RequestProductSupplierRepository repository;
    //metods

    //constructor
    public RequestProductSupplierServices(RequestProductSupplierRepository repository) {
        this.repository = repository;
    }

    //create requestProductSupplier

    public void createRequestProductSupplier(RequestProductSupplier requestProductSupplier){
        repository.save(requestProductSupplier);
    }

    //update requestProductSupplier
    public void updateRequestProductSupplier (RequestProductSupplier requestProductSupplier){
        if(requestProductSupplier.getIdRequestProductSupplier() != null && repository.existsById(requestProductSupplier.getIdRequestProductSupplier())){
            repository.save(requestProductSupplier);
        }
    }

    //delete requestProductSupplier
    public void deleteRequestProductSupplier (Long idRequestProductSupplier){
        if(idRequestProductSupplier != null && repository.existsById(idRequestProductSupplier)){
            repository.deleteById(idRequestProductSupplier);
        }
    }

    // get all requestProductSuppliers

    public List<RequestProductSupplier> getAllRequestProductSuppliers(){
        return repository.findAll();
    }

    //get requestProductSupplier by id
    public RequestProductSupplier getRequestProductSupplierById(Long idRequestProductSupplier){
        if(idRequestProductSupplier != null && repository.existsById(idRequestProductSupplier)){
            Optional<RequestProductSupplier> requestProductSupplier= repository.findById(idRequestProductSupplier);
            return requestProductSupplier.orElse(null);
        }

        return null;
    }

    //get requestProductSupplier by idSupplier
    public RequestProductSupplier getRequestProductSupplierByIdSupplier (Long idSupplier){
        if(idSupplier != null  ){
            Optional<RequestProductSupplier> requestProductSupplier= repository.findRequestProductSupplierByIdSupplier(idSupplier);
            return requestProductSupplier.orElse(null);
        }
        return null;
    }

    //get requestProductSupplier by idSalePoint
    public RequestProductSupplier getRequestProductSupplierByIdSalePoint (Long idSalePoint){
        if(idSalePoint != null  ){
            Optional<RequestProductSupplier> requestProductSupplier= repository.findRequestProductSupplierByIdSalePoint(idSalePoint);
            return requestProductSupplier.orElse(null);
        }
        return null;
    }

    //get requestProductSupplier by idWarehouse
    public RequestProductSupplier getRequestProductSupplierByIdWarehouse (Long idWarehouse){
        if(idWarehouse != null  ){
            Optional<RequestProductSupplier> requestProductSupplier= repository.findRequestProductSupplierByIdWarehouse(idWarehouse);
            return requestProductSupplier.orElse(null);
        }
        return null;
    }
}
