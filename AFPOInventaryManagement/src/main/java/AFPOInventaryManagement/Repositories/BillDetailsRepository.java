package AFPOInventaryManagement.Repositories;

import AFPOInventaryManagement.Models.BillDetails;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BillDetailsRepository extends JpaRepository<BillDetails,Long> {
    List<BillDetails> findBillDetailsByIdBill(Long idBill);
}
