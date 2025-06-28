package AFPOInventaryManagement.Models;

import jakarta.persistence.*;

@Entity
@Table(name="billDetails")
public class BillDetails {
    //atributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idBillDetails;
    @Column(name = "idBill")
    private Long idBill;
    @Column(name = "idKardex")
    private Long idKardex;
    @Column(name = "productsPrice")
    private Float productsPrice;
    @Column(name = "productQuantity")
    private Long productQuantity;

    //metods
    //empty constructor

    public BillDetails() {
    }

    //full constructor
    public BillDetails(Long idBillDetails, Long idBill, Long idKardex, Float productsPrice, Long productQuantity) {
        this.idBillDetails = idBillDetails;
        this.idBill = idBill;
        this.idKardex = idKardex;
        this.productsPrice = productsPrice;
        this.productQuantity = productQuantity;
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

    public Float getProductsPrice() {
        return productsPrice;
    }

    public void setProductsPrice(Float productsPrice) {
        this.productsPrice = productsPrice;
    }

    public Long getProductQuantity() {
        return productQuantity;
    }

    public void setProductQuantity(Long productQuantity) {
        this.productQuantity = productQuantity;
    }
}
