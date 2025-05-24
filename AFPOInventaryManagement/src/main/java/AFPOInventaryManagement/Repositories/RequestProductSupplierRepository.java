package AFPOInventaryManagement.Repositories;

import AFPOInventaryManagement.Models.RequestProductSupplier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RequestProductSupplierRepository extends JpaRepository<RequestProductSupplier,Long> {

    Optional<RequestProductSupplier> findRequestProductSupplierByIdSupplier(Long idSupplier);
    Optional<RequestProductSupplier> findRequestProductSupplierByIdSalePoint(Long idSalePoint);
    Optional<RequestProductSupplier> findRequestProductSupplierByIdWarehouse(Long idWarehouse);
    

}
