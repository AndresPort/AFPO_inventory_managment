package AFPOInventaryManagment.Models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
//Pogo class

@Entity
public class Employee {
    //atribute
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id_employee;

    String code_log_in;
    String password;
    String first_name;
    String second_name;
    String last_name;
    String second_last_name;
    String cedula;
    String phone_number;
    String email;
    String role;

    //metods

    //Constructors

    //empy constructor
    public Employee() {
    }

    //full constructor
    public Employee(String code_log_in, String password, String first_name, String second_name, String last_name, String second_last_name, String cedula, String phone_number, String email, String role) {
        this.code_log_in = code_log_in;
        this.password = password;
        this.first_name = first_name;
        this.second_name = second_name;
        this.last_name = last_name;
        this.second_last_name = second_last_name;
        this.cedula = cedula;
        this.phone_number = phone_number;
        this.email = email;
        this.role = role;
    }

    //getters and setters


    public Long getId_employee() {
        return id_employee;
    }

    public void setId_employee(Long id_employee) {
        this.id_employee = id_employee;
    }

    public String getCode_log_in() {
        return code_log_in;
    }

    public void setCode_log_in(String code_log_in) {
        this.code_log_in = code_log_in;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getSecond_name() {
        return second_name;
    }

    public void setSecond_name(String second_name) {
        this.second_name = second_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getSecond_last_name() {
        return second_last_name;
    }

    public void setSecond_last_name(String second_last_name) {
        this.second_last_name = second_last_name;
    }

    public String getCedula() {
        return cedula;
    }

    public void setCedula(String cedula) {
        this.cedula = cedula;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
