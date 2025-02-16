package AFPOInventaryManagement.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "Category")
public class Category {

    //atributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCategory;
    @Column(name = "categoryName")
    private String categoryName;

    //metods
    //empyconstructor
    public Category() {
    }

    //full constructor
    public Category(Long idCategory, String categoryName) {
        this.idCategory = idCategory;
        this.categoryName = categoryName;
    }

    //getter and setters
    public Long getIdCategory() {
        return idCategory;
    }

    public void setIdCategory(Long idCategory) {
        this.idCategory = idCategory;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }
}
