package AFPOInventaryManagement.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "Role")
public class Role {
    //atributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idRole;
    @Column(name = "rolName")
    private String rolName;

    //metods
    //empy constructor

    public Role() {
    }

    //complete constructor
    public Role(Long idRole, String rolName) {
        this.idRole = idRole;
        this.rolName = rolName;
    }

    //getter ands setters

    public Long getIdRole() {
        return idRole;
    }

    public void setIdRole(Long idRole) {
        this.idRole = idRole;
    }

    public String getRolName() {
        return rolName;
    }

    public void setRolName(String rolName) {
        this.rolName = rolName;
    }
}
