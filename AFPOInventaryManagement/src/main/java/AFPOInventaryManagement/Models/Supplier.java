package AFPOInventaryManagement.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "Supplier")
public class Supplier {
    //Atributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idSupplier;
    @Column(name = "nit")
    private String nit;
    @Column(name = "name")
    private String name;
    @Column(name = "contactNumber")
    private String contactNumber;
    @Column(name = "adress")
    private String adress;
    @Column(name = "points")
    private Long points;
    //metods

    //empty constructor
    public Supplier() {
    }

    //full constructor
    public Supplier(Long idSupplier, String nit, String name, String contactNumber, String adress, Long points) {
        this.idSupplier = idSupplier;
        this.nit = nit;
        this.name = name;
        this.contactNumber = contactNumber;
        this.adress = adress;
        this.points = points;
    }

    //getters and setters
    public Long getIdSupplier() {
        return idSupplier;
    }

    public void setIdSupplier(Long idSupplier) {
        this.idSupplier = idSupplier;
    }

    public String getNit() {
        return nit;
    }

    public void setNit(String nit) {
        this.nit = nit;
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

    public Long getPoints() {
        return points;
    }

    public void setPoints(Long points) {
        this.points = points;
    }
}
