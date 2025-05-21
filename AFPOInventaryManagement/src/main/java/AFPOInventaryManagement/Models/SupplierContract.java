package AFPOInventaryManagement.Models;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "SupplierContract")
public class SupplierContract {
    //atributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idSupplierContract;
    @Column(name = "idSalePoint")
    private Long idSalePoint;
    @Column(name = "idSupplier")
    private Long idSupplier;
    @Column(name = "description")
    private String description;
    @Column(name = "startContract")
    private Date startContract;

    //metods

    //empty constructor
    public SupplierContract() {
    }

    //full constructor
    public SupplierContract(Long idSupplierContract, Long idSalePoint, Long idSupplier, String description, Date startContract) {
        this.idSupplierContract = idSupplierContract;
        this.idSalePoint = idSalePoint;
        this.idSupplier = idSupplier;
        this.description = description;
        this.startContract = startContract;
    }

    //getters and setters
    public Long getIdSupplierContract() {
        return idSupplierContract;
    }

    public void setIdSupplierContract(Long idSupplierContract) {
        this.idSupplierContract = idSupplierContract;
    }

    public Long getIdSalePoint() {
        return idSalePoint;
    }

    public void setIdSalePoint(Long idSalePoint) {
        this.idSalePoint = idSalePoint;
    }

    public Long getIdSupplier() {
        return idSupplier;
    }

    public void setIdSupplier(Long idSupplier) {
        this.idSupplier = idSupplier;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getStartContract() {
        return startContract;
    }

    public void setStartContract(Date startContract) {
        this.startContract = startContract;
    }
}
