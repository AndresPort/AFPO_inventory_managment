package AFPOInventaryManagement.Repositories;

import AFPOInventaryManagement.Models.TypeOfMovement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TypeOfMovementRepository extends JpaRepository<TypeOfMovement, Long> {

    List<TypeOfMovement> findMovementByIdTypeOfMovement(Long idTypeOfMovement);

}
