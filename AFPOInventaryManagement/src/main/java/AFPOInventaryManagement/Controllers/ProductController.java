package AFPOInventaryManagement.Controllers;
import AFPOInventaryManagement.Models.Product;
import AFPOInventaryManagement.Services.ProductServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {
    //atributes
    @Autowired
    private ProductServices services;

    //metods
    //constructor
    public ProductController(ProductServices services) {
        this.services = services;
    }

    //create product
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping("/api/createProduct")
    public void createProduct(@RequestBody Product product){
        services.createProduct(product);

        //no voy a hacer que retorne un mensaje de confirmacion de tipo ResponseEntity.ok
        //porque igualmente por el manejo de exepciones del front end puedo saber si el
        // funcionamiento es correcto o no
    }

    //update product
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PutMapping("/api/updateProduct")
    public void updateProduct(@RequestBody Product product) {
        services.updateProduct(product);
    }

    //delete product
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @DeleteMapping("/api/deleteProduct/{idProduct}")
    public void deleteProduct(@PathVariable Long idProduct) {
        services.deleteProduct(idProduct);
    }

    // get all products
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getAllProducts")
    public List<Product> getAllProducts(){
        return services.getAllProducts();
    }


    //get product by id
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getProductById/{idProduct}")
    public Product getProductById(@PathVariable Long idProduct) {
        return services.getProductById(idProduct);
    }

    //get product by name
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getProductByName/{name}")
    public Product getProductByName(@PathVariable String name) {
        return services.getProductByName(name);
    }
}
