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
    @Column(name = "address")
    private String address;

    //metods
    //empty constructor
    public Warehouse() {
    }

    //full constructor

    public Warehouse(Long idWarehouse, String name, String contactNumber, String address) {
        this.idWarehouse = idWarehouse;
        this.name = name;
        this.contactNumber = contactNumber;
        this.address = address;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
