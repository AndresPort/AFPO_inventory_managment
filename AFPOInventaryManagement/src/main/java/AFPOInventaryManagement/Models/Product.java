package AFPOInventaryManagement.Models;

import jakarta.persistence.*;

@Entity
@Table(name="Product")
public class Product {
    //atributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProduct;
    @Column(name= "name")
    private String name;
    @Column (name= "description")
    private String description;
    @Column (name= "price")
    private double price;
    @Column (name= "brand")
    private String brand;
    //metods
    // empy construtor
    public Product() {
    }

    //full constructor
    public Product(Long idProduct, String name, String description, double price, String brand) {
        this.idProduct = idProduct;
        this.name = name;
        this.description = description;
        this.price = price;
        this.brand = brand;
    }

    //getters y setters

    public Long getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(Long idProduct) {
        this.idProduct = idProduct;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }
}