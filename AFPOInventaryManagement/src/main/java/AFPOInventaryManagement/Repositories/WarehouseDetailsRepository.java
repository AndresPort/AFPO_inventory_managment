package AFPOInventaryManagement.Repositories;
import AFPOInventaryManagement.Models.WarehouseDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WarehouseDetailsRepository extends JpaRepository<WarehouseDetails,Long> {
}
