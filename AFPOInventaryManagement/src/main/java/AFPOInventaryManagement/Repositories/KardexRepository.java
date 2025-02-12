package AFPOInventaryManagement.Repositories;

import AFPOInventaryManagement.Models.Kardex;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface KardexRepository extends JpaRepository<Kardex,Long> {

    Optional<Kardex> findKardexByType(String type);
}
