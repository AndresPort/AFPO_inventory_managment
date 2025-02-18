package AFPOInventaryManagement.Services;

import AFPOInventaryManagement.Models.Category;
import AFPOInventaryManagement.Repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServices {
    //atributes
    @Autowired
    private CategoryRepository repository;
    
    //metods
    //constructor
    public CategoryServices(CategoryRepository repository) {
        this.repository = repository;
    }

    //create category
    public void createCategory(Category category){
        repository.save(category);
    }

    //update category
    public void updateCategory (Category category){
        if( category.getIdCategory() != null && repository.existsById(category.getIdCategory())){
            repository.save(category);
        }
    }

    //delete category
    public void deleteCategory (Long idCategory){
        if(idCategory != null && repository.existsById(idCategory)){
            repository.deleteById(idCategory);
        }
    }

    // get all categories

    public List<Category> getAllCategories(){
        return repository.findAll();
    }

    //get category by id
    public Category getCategoryById(Long idCategory){
        if(idCategory != null && repository.existsById(idCategory)){
            Optional<Category> category= repository.findById(idCategory);
            return category.orElse(null);
        }
        return null;
    }
}
