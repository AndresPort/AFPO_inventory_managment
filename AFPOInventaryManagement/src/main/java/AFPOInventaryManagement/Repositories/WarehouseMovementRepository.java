package AFPOInventaryManagement.Repositories;

import AFPOInventaryManagement.Models.WarehouseMovement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WarehouseMovementRepository extends JpaRepository<WarehouseMovement,Long> {
}
