package AFPOInventaryManagement.Models;
import jakarta.persistence.*;

@Entity
@Table(name="typeOfMovement")
public class TypeOfMovement {
    //atributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTypeOfMovement;
    @Column(name = "movementName")
    private String movementName;

    //Metods
    //empty constructor
    public TypeOfMovement() {
    }

    //full constructor
    public TypeOfMovement(Long idTypeOfMovement, String movementName) {
        this.idTypeOfMovement = idTypeOfMovement;
        this.movementName = movementName;
    }

    //getters and setters

    public Long getIdTypeOfMovement() {
        return idTypeOfMovement;
    }

    public void setIdTypeOfMovement(Long idTypeOfMovement) {
        this.idTypeOfMovement = idTypeOfMovement;
    }

    public String getMovementName() {
        return movementName;
    }

    public void setMovementName(String movementName) {
        this.movementName = movementName;
    }
}
