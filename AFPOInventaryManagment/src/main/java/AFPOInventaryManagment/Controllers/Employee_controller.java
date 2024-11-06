package AFPOInventaryManagment.Controllers;

import AFPOInventaryManagment.Models.Employee;
import AFPOInventaryManagment.Repositories.Employee_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Employee_controller {
    //atributes
    @Autowired
    Employee_repository repository;

    //metods

    Employee_controller(Employee_repository repository){
        this.repository=repository;
    }

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping("/api/crear_empleado")
    public ResponseEntity<String> crear_empleado(@RequestBody Employee employee){
        repository.save(employee);
        return ResponseEntity.ok("Employee created successfully");
    }

    @GetMapping("/api/employees")
    public List<Employee> get_employees(){
        return repository.findAll();
    }

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping("/api/actualizar_empleado")
    public ResponseEntity<String> actualizar_empleado(@RequestBody Employee employee){

        if (employee.getId_employee() == null || !repository.existsById(employee.getId_employee())){
            return ResponseEntity.badRequest().build();
        }
        repository.save(employee);
        return ResponseEntity.ok("Employee created successfully");
    }

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping("/api/eliminar_empleado/{id_employee}")
    public ResponseEntity<String> eliminar_empleado( @PathVariable Long id_employee){

        if (id_employee == null || !repository.existsById(id_employee)){
            return ResponseEntity.badRequest().build();
        }
        repository.deleteById(id_employee);
        return ResponseEntity.noContent().build();
    }

}
