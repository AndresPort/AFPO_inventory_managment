package AFPOInventaryManagement.Repositories;

import AFPOInventaryManagement.Models.SalePoint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SalePointRepository extends JpaRepository<SalePoint,Long> {

    Optional<SalePoint> findSalePointByIdUser(Long idUser);
}
