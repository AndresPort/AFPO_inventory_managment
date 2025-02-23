package AFPOInventaryManagement.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "warehouse")
public class Warehouse {
    //atributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idWarehouse;
    @Column(name = "idKardex")
    private Long idKardex;
    @Column(name = "name")
    private String name;
    @Column(name = "contactNumber")
    private String contactNumber;
    @Column(name = "adress")
    private String adress;

    //metods
    //empty constructor
    public Warehouse() {
    }

    // constructor without idKardex
    public Warehouse(Long idWarehouse, String name, String contactNumber, String adress) {
        this.idWarehouse = idWarehouse;
        this.name = name;
        this.contactNumber = contactNumber;
        this.adress = adress;
    }

    //full constructor
    public Warehouse(Long idWarehouse, Long idKardex, String name, String contactNumber, String adress) {
        this.idWarehouse = idWarehouse;
        this.idKardex = idKardex;
        this.name = name;
        this.contactNumber = contactNumber;
        this.adress = adress;
    }

    //getters and setters

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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }
}
