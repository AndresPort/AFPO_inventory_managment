package AFPOInventaryManagement.Models;

import jakarta.persistence.*;

@Entity
@Table(name="WarehouseMovement")
public class WarehouseMovement {
    //atributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idWarehouseMovement;
    @Column(name = "movementName")
    private String movementName;
    //metods

    //emptyConstructor
    public WarehouseMovement() {
    }

    //constructor without idWarehouseMovement

    public WarehouseMovement(String movementName) {
        this.movementName = movementName;
    }

    //full constructor
    public WarehouseMovement(Long idWarehouseMovement, String movementName) {
        this.idWarehouseMovement = idWarehouseMovement;
        this.movementName = movementName;
    }

    //getter and setters

    public Long getIdWarehouseMovement() {
        return idWarehouseMovement;
    }

    public void setIdWarehouseMovement(Long idWarehouseMovement) {
        this.idWarehouseMovement = idWarehouseMovement;
    }

    public String getMovementName() {
        return movementName;
    }

    public void setMovementName(String movementName) {
        this.movementName = movementName;
    }
}
