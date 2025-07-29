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
    @Column(name = "idWarehouse")
    private Long idWarehouse;
    @Column(name = "productsPrice")
    private Float productsPrice;
    @Column(name = "productQuantity")
    private Long productQuantity;

    //metods
    //empty constructor

    public BillDetails() {
    }

    //full constructor
    public BillDetails(Long idBillDetails, Long idBill, Long idKardex, Long idWarehouse,  Float productsPrice, Long productQuantity) {
        this.idBillDetails = idBillDetails;
        this.idBill = idBill;
        this.idKardex = idKardex;
        this.idWarehouse = idWarehouse;
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

    public Long getIdWarehouse() {
        return idWarehouse;
    }

    public void setIdWarehouse(Long idWarehouse) {
        this.idWarehouse= idWarehouse;
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
