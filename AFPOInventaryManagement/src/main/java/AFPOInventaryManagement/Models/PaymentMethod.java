package AFPOInventaryManagement.Models;

import jakarta.persistence.*;

@Entity
@Table(name="PaymentMethod")
public class PaymentMethod{
    //atributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idPaymentMethod;
    @Column(name = "methodName")
    private String methodName;

    //Methods
    //empty constructor


    public PaymentMethod() {
    }

    //full constructor
    public PaymentMethod(Long idPaymentMethod, String methodName) {
        this.idPaymentMethod = idPaymentMethod;
        this.methodName = methodName;
    }

    //getter and setters
    public Long getIdPaymentMethod() {
        return idPaymentMethod;
    }

    public void setIdPaymentMethod(Long idPaymentMethod) {
        this.idPaymentMethod = idPaymentMethod;
    }

    public String getMethodName() {
        return methodName;
    }

    public void setMethodName(String methodName) {
        this.methodName = methodName;
    }
}