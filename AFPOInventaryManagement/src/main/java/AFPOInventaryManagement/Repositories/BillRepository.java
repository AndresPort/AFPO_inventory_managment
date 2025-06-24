package AFPOInventaryManagement.Repositories;

import AFPOInventaryManagement.Models.Bill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BillRepository extends JpaRepository<Bill,Long> {

    Optional<Bill> findBillByIdClient(Long idClient);
    Optional<Bill> findBillByIdPaymentMethod(Long idPaymentMethod);
    Optional<Bill> findBillByIdSalePoint(Long idSalePoint);
}
