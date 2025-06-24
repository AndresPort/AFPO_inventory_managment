package AFPOInventaryManagement.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "warehouse")
public class Warehouse {
    //atributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idWarehouse;
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

    //full constructor

    public Warehouse(Long idWarehouse, String name, String contactNumber, String adress) {
        this.idWarehouse = idWarehouse;
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
