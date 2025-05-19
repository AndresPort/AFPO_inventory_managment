package AFPOInventaryManagement.Services;

import AFPOInventaryManagement.Models.PaymentMethod;
import AFPOInventaryManagement.Repositories.PaymentMethodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentMethodServices {
    //atributes
    @Autowired
    private PaymentMethodRepository repository;
    //methods
    
    //constructor

    public PaymentMethodServices(PaymentMethodRepository repository) {
        this.repository = repository;
    }

    //crud
    //create paymentMethod
    public void createPaymentMethod(PaymentMethod paymentMethod){
        repository.save(paymentMethod);
    }

    //update paymentMethod
    public void updatePaymentMethod (PaymentMethod paymentMethod){
        if(paymentMethod.getIdPaymentMethod() != null && repository.existsById(paymentMethod.getIdPaymentMethod())){
            repository.save(paymentMethod);
        }
    }

    //delete paymentMethod
    public void deletePaymentMethod (Long idPaymentMethod){
        if(idPaymentMethod != null && repository.existsById(idPaymentMethod)){
            repository.deleteById(idPaymentMethod);
        }
    }

    // get all paymentMethod

    public List<PaymentMethod> getAllPaymentMethod(){
        return repository.findAll();
    }

    //get paymentMethod by id
    public PaymentMethod getPaymentMethodById(Long idPaymentMethod){
        if(idPaymentMethod != null && repository.existsById(idPaymentMethod)){
            Optional<PaymentMethod> paymentMethod= repository.findById(idPaymentMethod);
            return paymentMethod.orElse(null);
        }

        return null;
    }
}
