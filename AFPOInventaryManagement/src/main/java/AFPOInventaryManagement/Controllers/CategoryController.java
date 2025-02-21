package AFPOInventaryManagement.Controllers;

import AFPOInventaryManagement.Models.Category;
import AFPOInventaryManagement.Services.CategoryServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoryController {
    //atributes
    @Autowired
    private CategoryServices services;

    //metods
    //constructor
    public CategoryController(CategoryServices services) {
        this.services = services;
    }

    //create category
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping("/api/createCategory/{categoryName}")
    public void createCategory(@PathVariable String categoryName){
        Category category = new Category();
        category.setCategoryName(categoryName);
        services.createCategory(category);

        //no voy a hacer que retorne un mensaje de confirmacion de tipo ResponseEntity.ok
        //porque igualmente por el manejo de exepciones del front end puedo saber si el
        // funcionamiento es correcto o no
    }

    //update category
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PutMapping("/api/updateCategory")
    public void updateCategory(@RequestBody Category category) {
        services.updateCategory(category);
    }

    //delete category
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @DeleteMapping("/api/deleteCategory/{idCategory}")
    public void deleteCategory(@PathVariable Long idCategory) {
        services.deleteCategory(idCategory);
    }

    // get all categories
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getAllCategories")
    public List<Category> getAllCategories(){
        return services.getAllCategories();
    }

    //get category by id
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getCategoryById/{idCategory}")
    public Category getCategoryById(@PathVariable Long idCategory) {
        return services.getCategoryById(idCategory);
    }

    //get CateogoryByName
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getCategoryByCategoryName/{categoryName}")
    public List<Category> getCategoryByCategoryName(@PathVariable String categoryName) {
         return services.getCategoryByCategoryName(categoryName);
    }
}
