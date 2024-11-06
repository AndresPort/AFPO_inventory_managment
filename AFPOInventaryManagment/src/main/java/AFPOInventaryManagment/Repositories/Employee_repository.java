package AFPOInventaryManagment.Repositories;

import AFPOInventaryManagment.Models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Employee_repository extends JpaRepository<Employee,Long> {
}
