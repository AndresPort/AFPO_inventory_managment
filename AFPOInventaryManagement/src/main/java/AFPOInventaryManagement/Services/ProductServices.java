package AFPOInventaryManagement.Services;

import AFPOInventaryManagement.Models.Product;
import AFPOInventaryManagement.Repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServices {
    //atributes
    @Autowired
    private ProductRepository repository;

    //constructor

    public ProductServices(ProductRepository repository) {
        this.repository = repository;
    }

    //crud
    //create product
    public void createProduct(Product product){
        repository.save(product);
    }

    //update product
    public void updateProduct (Product product){
        if(product.getIdProduct() != null && repository.existsById(product.getIdProduct())){
            repository.save(product);
        }
    }

    //delete product
    public void deleteProduct (Long idProduct){
        if(idProduct != null && repository.existsById(idProduct)){
            repository.deleteById(idProduct);
        }
    }

    // get all products

    public List<Product> getAllProducts(){
        return repository.findAll();
    }

    //get product by id
    public Product getProductById(Long idProduct){
        if(idProduct != null && repository.existsById(idProduct)){
            Optional<Product> product= repository.findById(idProduct);
            return product.orElse(null);
        }

        return null;
    }

    //get product by name

    public Product getProductByName (String name){
        if(name != null  ){
            Optional<Product> product= repository.findProductByName(name);
            return product.orElse(null);
        }
        return null;
    }
}
