package AFPOInventaryManagement.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "bill")
public class Bill {
    //atributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idBill;
    @Column(name = "idClient")
    private Long idClient;
    @Column(name = "idSalePoint")
    private Long idSalePoint;
    @Column(name = "idTypeOfMovement")
    private Long idTypeOfMovement;
    @Column(name = "idWarehouse")
    private Long idWarehouse;
    @Column(name = "idPaymentMethod")
    private Long idPaymentMethod;
    @Column(name = "totalPrice")
    private Float totalPrice;

    //metods
    //empty methods

    public Bill() {
    }

    //full methods

    public Bill(Long idBill, Long idClient, Long idSalePoint, Long idTypeOfMovement, Long idWarehouse, Long idPaymentMethod, Float totalPrice) {
        this.idBill = idBill;
        this.idClient = idClient;
        this.idSalePoint = idSalePoint;
        this.idTypeOfMovement = idTypeOfMovement;
        this.idWarehouse = idWarehouse;
        this.idPaymentMethod = idPaymentMethod;
        this.totalPrice = totalPrice;
    }

    //getters and setters

    public Long getIdBill() {
        return idBill;
    }

    public void setIdBill(Long idBill) {
        this.idBill = idBill;
    }

    public Long getIdClient() {
        return idClient;
    }

    public void setIdClient(Long idClient) {
        this.idClient = idClient;
    }

    public Long getIdSalePoint() {
        return idSalePoint;
    }

    public void setIdSalePoint(Long idSalePoint) {
        this.idSalePoint = idSalePoint;
    }

    public Long getIdTypeOfMovement() {
        return idTypeOfMovement;
    }

    public void setIdTypeOfMovement(Long idTypeOfMovement) {
        this.idTypeOfMovement = idTypeOfMovement;
    }

    public Long getIdWarehouse() {
        return idWarehouse;
    }

    public void setIdWarehouse(Long idWarehouse) {
        this.idWarehouse = idWarehouse;
    }

    public Long getIdPaymentMethod() {
        return idPaymentMethod;
    }

    public void setIdPaymentMethod(Long idPaymentMethod) {
        this.idPaymentMethod = idPaymentMethod;
    }

    public Float getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Float totalPrice) {
        this.totalPrice = totalPrice;
    }
}
