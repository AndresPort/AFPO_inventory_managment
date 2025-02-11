package AFPOInventaryManagement.Models;
import jakarta.persistence.*;


@Entity
@Table(name="Client")
public class Client {
    //atributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idClient;
    @Column (name= "cedula")
    private String cedula;
    @Column (name= "phoneNumber")
    private String phoneNumber;
    @Column (name= "firstName")
    private String firstName;
    @Column (name= "secondName")
    private String secondName;
    @Column (name= "lastName")
    private String lastName;
    @Column (name= "secondLastName")
    private String secondLastName;
    @Column (name= "homeAdress")
    private String homeAdress;
    //metods

    //void constructor
    public Client() {
    }

    //constructor without id Client
        public Client(String homeAdress, String secondLastName, String lastName, String secondName, String firstName, String phoneNumber, String cedula) {
        this.homeAdress = homeAdress;
        this.secondLastName = secondLastName;
        this.lastName = lastName;
        this.secondName = secondName;
        this.firstName = firstName;
        this.phoneNumber = phoneNumber;
        this.cedula = cedula;
    }

    //full constructor

    public Client(Long idClient, String cedula, String phoneNumber, String firstName, String secondName, String lastName, String secondLastName, String homeAdress) {
        this.idClient = idClient;
        this.cedula = cedula;
        this.phoneNumber = phoneNumber;
        this.firstName = firstName;
        this.secondName = secondName;
        this.lastName = lastName;
        this.secondLastName = secondLastName;
        this.homeAdress = homeAdress;
    }

    //getters and setters

    public Long getIdClient() {
        return idClient;
    }

    public void setIdClient(Long idClient) {
        this.idClient = idClient;
    }

    public String getCedula() {
        return cedula;
    }

    public void setCedula(String cedula) {
        this.cedula = cedula;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getSecondLastName() {
        return secondLastName;
    }

    public void setSecondLastName(String secondLastName) {
        this.secondLastName = secondLastName;
    }

    public String getHomeAdress() {
        return homeAdress;
    }

    public void setHomeAdress(String homeAdress) {
        this.homeAdress = homeAdress;
    }
}
