package AFPOInventaryManagement.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "SalePoint")
public class SalePoint {
    //atributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idSalePoint;
    @Column(name = "idUser")
    private Long idUser;
    @Column(name = "adress")
    private String adress;
    @Column(name = "contactNumber")
    private String contactNumber;

    //metods
    //constructor
    //emptyConstructor
    public SalePoint() {
    }

    //constructor without idSalePoint
    public SalePoint(Long idUser, String adress, String contactNumber) {
        this.idUser = idUser;
        this.adress = adress;
        this.contactNumber = contactNumber;
    }

    //full constructor
    public SalePoint(Long idSalePoint, Long idUser, String adress, String contactNumber) {
        this.idSalePoint = idSalePoint;
        this.idUser = idUser;
        this.adress = adress;
        this.contactNumber = contactNumber;
    }

    //getters and setters

    public Long getIdSalePoint() {
        return idSalePoint;
    }

    public void setIdSalePoint(Long idSalePoint) {
        this.idSalePoint = idSalePoint;
    }

    public Long getIdUser() {
        return idUser;
    }

    public void setIdUser(Long idUser) {
        this.idUser = idUser;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }
}
