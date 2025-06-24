package AFPOInventaryManagement.Models;

import jakarta.persistence.*;

@Entity
@Table(name="billDetails")
public class BillDetails {
    //atributes
    @Id
    @GeneratedValue
    private Long idBillDetails;
    @Column(name = "idBill")
    private Long idBill;
    @Column(name = "idKardex")
    private Long idKardex;
    @Column(name = "productsPrice")
    private Float idProductsPrice;
    @Column(name = "productQuantity")
    private Long idProductQuantity;

    //metods
    //empty constructor

    public BillDetails() {
    }

    //full constructor
    public BillDetails(Long idBillDetails, Long idBill, Long idKardex, Float idProductsPrice, Long idProductQuantity) {
        this.idBillDetails = idBillDetails;
        this.idBill = idBill;
        this.idKardex = idKardex;
        this.idProductsPrice = idProductsPrice;
        this.idProductQuantity = idProductQuantity;
    }

    //getters and setters

    public Long getIdBillDetails() {
        return idBillDetails;
    }

    public void setIdBillDetails(Long idBillDetails) {
        this.idBillDetails = idBillDetails;
    }

    public Long getIdBill() {
        return idBill;
    }

    public void setIdBill(Long idBill) {
        this.idBill = idBill;
    }

    public Long getIdKardex() {
        return idKardex;
    }

    public void setIdKardex(Long idKardex) {
        this.idKardex = idKardex;
    }

    public Float getIdProductsPrice() {
        return idProductsPrice;
    }

    public void setIdProductsPrice(Float idProductsPrice) {
        this.idProductsPrice = idProductsPrice;
    }

    public Long getIdProductQuantity() {
        return idProductQuantity;
    }

    public void setIdProductQuantity(Long idProductQuantity) {
        this.idProductQuantity = idProductQuantity;
    }
}
