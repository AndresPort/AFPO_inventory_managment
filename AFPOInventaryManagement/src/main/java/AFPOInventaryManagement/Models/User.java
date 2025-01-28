package AFPOInventaryManagement.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "User")
public class User {
    //atributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUser;
    @Column(name = "userCode")
    private String userCode;
    @Column(name = "password")
    private String password;
    @Column(name = "idRole")
    private Long idRole;
    @Column(name = "firstName")
    private String firstName;
    @Column(name = "secondName")
    private String secondName;
    @Column(name = "lastName")
    private String lastName;
    @Column(name = "secondLastName")
    private String SecondLastName;
    @Column(name = "cedula")
    private String cedula;
    @Column(name = "phoneNumber")
    private String phoneNumber;
    @Column(name = "email")
    private String email;

    //metods

    // void constructor
    public User() {
    }

    //complete constructor
    public User(Long idUser, String userCode, String password, Long idRole, String firstName, String secondName, String lastName, String secondLastName, String cedula, String phoneNumber, String email) {
        this.idUser = idUser;
        this.userCode = userCode;
        this.password = password;
        this.idRole = idRole;
        this.firstName = firstName;
        this.secondName = secondName;
        this.lastName = lastName;
        SecondLastName = secondLastName;
        this.cedula = cedula;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    //getters and setters

    public Long getIdUser() {
        return idUser;
    }

    public void setIdUser(Long idUser) {
        this.idUser = idUser;
    }

    public String getUserCode() {
        return userCode;
    }

    public void setUserCode(String userCode) {
        this.userCode = userCode;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getIdRole() {
        return idRole;
    }

    public void setIdRole(Long idRole) {
        this.idRole = idRole;
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
        return SecondLastName;
    }

    public void setSecondLastName(String secondLastName) {
        SecondLastName = secondLastName;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}

