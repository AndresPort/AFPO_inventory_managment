package AFPOInventaryManagement.Models;

import jakarta.persistence.*;

@Entity
@Table(name="Kardex")
public class Kardex {
    //atributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idKardex;
    @Column(name= "idProduct")
    private Long idProduct;
    @Column (name= "idCategory")
    private Long idCategory;
    @Column (name= "quantity")
    private int quantity;


    //metods
    //empty constructor
    public Kardex() {
    }

    //constructor withotut idKardex


    public Kardex(Long idProduct, Long idCategory, int quantity) {
        this.idProduct = idProduct;
        this.idCategory = idCategory;
        this.quantity = quantity;
    }

    //full constructor
    public Kardex(Long idKardex, Long idProduct, Long idCategory, int quantity) {
        this.idKardex = idKardex;
        this.idProduct = idProduct;
        this.idCategory = idCategory;
        this.quantity = quantity;
    }


    //getter and setters

    public Long getIdKardex() {
        return idKardex;
    }

    public void setIdKardex(Long idKardex) {
        this.idKardex = idKardex;
    }

    public Long getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(Long idProduct) {
        this.idProduct = idProduct;
    }

    public Long getIdCategory() {
        return idCategory;
    }

    public void setIdCategory(Long idCategory) {
        this.idCategory = idCategory;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
