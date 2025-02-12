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
    @Column (name= "quantity")
    private int quantity;
    @Column (name= "type")
    private String type;

    //metods
    //empty constructor
    public Kardex() {
    }
    //full constructor
    public Kardex(Long idKardex, Long idProduct, int quantity, String type) {
        this.idKardex = idKardex;
        this.idProduct = idProduct;
        this.quantity = quantity;
        this.type = type;
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

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
