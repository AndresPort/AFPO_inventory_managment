package AFPOInventaryManagement.Models;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "RequestProductSupplier")
public class RequestProductSupplier {
    //atributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idRequestProductSupplier;
    @Column(name = "idSupplier")
    private Long idSupplier;
    @Column(name = "idSalePoint")
    private Long idSalePoint;
    @Column(name = "idWarehouse")
    private Long idWarehouse;
    @Column(name = "idKardex")
    private Long idKardex;
    @Column(name = "requestDate")
    private Date requestDate;
    @Column(name = "totalPrice")
    private double totalPrice;
    //metods

    //empty constructor
    public RequestProductSupplier() {
    }

    //full constructor
    public RequestProductSupplier(Long idRequestProductSupplier, Long idSupplier, Long idSalePoint, Long idWarehouse, Long idKardex, Date requestDate, double totalPrice) {
        this.idRequestProductSupplier = idRequestProductSupplier;
        this.idSupplier = idSupplier;
        this.idSalePoint = idSalePoint;
        this.idWarehouse = idWarehouse;
        this.idKardex = idKardex;
        this.requestDate = requestDate;
        this.totalPrice = totalPrice;
    }

    //getters and setters
    public Long getIdRequestProductSupplier() {
        return idRequestProductSupplier;
    }

    public void setIdRequestProductSupplier(Long idRequestProductSupplier) {
        this.idRequestProductSupplier = idRequestProductSupplier;
    }

    public Long getIdSupplier() {
        return idSupplier;
    }

    public void setIdSupplier(Long idSupplier) {
        this.idSupplier = idSupplier;
    }

    public Long getIdSalePoint() {
        return idSalePoint;
    }

    public void setIdSalePoint(Long idSalePoint) {
        this.idSalePoint = idSalePoint;
    }

    public Long getIdWarehouse() {
        return idWarehouse;
    }

    public void setIdWarehouse(Long idWarehouse) {
        this.idWarehouse = idWarehouse;
    }

    public Long getIdKardex() {
        return idKardex;
    }

    public void setIdKardex(Long idKardex) {
        this.idKardex = idKardex;
    }

    public Date getRequestDate() {
        return requestDate;
    }

    public void setRequestDate(Date requestDate) {
        this.requestDate = requestDate;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }
}
