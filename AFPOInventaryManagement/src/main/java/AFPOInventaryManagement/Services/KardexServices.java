package AFPOInventaryManagement.Services;

import AFPOInventaryManagement.Models.Kardex;
import AFPOInventaryManagement.Repositories.KardexRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class KardexServices {
    //atributes
    @Autowired
    private KardexRepository repository;

    //constructor

    public KardexServices(KardexRepository repository) {
        this.repository = repository;
    }

    //crud
    //create kardex
    public void createKardex(Kardex kardex){
        repository.save(kardex);
    }

    //update kardex
    public void updateKardex (Kardex kardex){
        if(kardex.getIdKardex() != null && repository.existsById(kardex.getIdKardex())){
            repository.save(kardex);
        }
    }

    //delete kardex
    public void deleteKardex (Long idKardex){
        if(idKardex != null && repository.existsById(idKardex)){
            repository.deleteById(idKardex);
        }
    }

    // get all kardex

    public List<Kardex> getAllKardex(){
        return repository.findAll();
    }

    //get kardex by id
    public Kardex getKardexById(Long idKardex){
        if(idKardex != null && repository.existsById(idKardex)){
            Optional<Kardex> kardex= repository.findById(idKardex);
            return kardex.orElse(null);
        }

        return null;
    }

    //get kardex by IdCategory

    public List<Kardex> getKardexByCategory(Long idCategory){
        if(idCategory != null  ){
            List<Kardex> kardexList= repository.findKardexByIdCategory(idCategory);
            return kardexList.isEmpty() ? Collections.emptyList() : kardexList;
        }
        return Collections.emptyList();
    }
}
