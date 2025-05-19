package AFPOInventaryManagement.Repositories;
import AFPOInventaryManagement.Models.PaymentMethod;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaymentMethodRepository extends JpaRepository<PaymentMethod, Long> {

    List<PaymentMethod> findMethodByIdPaymentMethod(Long idPaymentMethod);
}
