package AFPOInventaryManagement.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "warehouseDetails")
public class WarehouseDetails {
    //atributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idWarehouseDetails;
    @Column(name = "idWarehouse")
    private Long idWarehouse;
    @Column(name = "idKardex")
    private Long idKardex;
    //metods

    //empty constructor

    public WarehouseDetails() {
    }

    //full constructor
    public WarehouseDetails(Long idWarehouseDetails, Long idWarehouse, Long idKardex) {
        this.idWarehouseDetails = idWarehouseDetails;
        this.idWarehouse = idWarehouse;
        this.idKardex = idKardex;
    }

    //getters and setters

    public Long getIdWarehouseDetails() {
        return idWarehouseDetails;
    }

    public void setIdWarehouseDetails(Long idWarehouseDetails) {
        this.idWarehouseDetails = idWarehouseDetails;
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
}
