package AFPOInventaryManagement.Repositories;

import AFPOInventaryManagement.Models.SupplierContract;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SupplierContractRepository extends JpaRepository<SupplierContract,Long> {

    Optional<SupplierContract> findSupplierContractByIdSupplier(Long idSupplier);
    Optional<SupplierContract> findSupplierContractByIdSalePoint(Long idSalePoint);
}
