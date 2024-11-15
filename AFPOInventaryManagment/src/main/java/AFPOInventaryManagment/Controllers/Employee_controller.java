package AFPOInventaryManagment.Controllers;

import AFPOInventaryManagment.Models.Employee;
import AFPOInventaryManagment.Repositories.Employee_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PutMapping("/api/actualizar_empleado")
    public ResponseEntity<String> actualizar_empleado(@RequestBody Employee employee){
        if (employee.getId_employee() == null || !repository.existsById(employee.getId_employee())){
            return ResponseEntity.badRequest().build();
        }
        repository.save(employee);
        return ResponseEntity.ok("Employee updated successfully");
    }

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @DeleteMapping("/api/delete_user/{id_user}")
    public ResponseEntity<String> eliminar_usuario( @PathVariable Long id_user){

        if (id_user == null || !repository.existsById(id_user)){
            return ResponseEntity.badRequest().build();
        }
        repository.deleteById(id_user);
        return ResponseEntity.noContent().build();
    }

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/get_users")
    public List<Employee> Obtener_empleados(){
        return repository.findAll();
    }

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/get_user/{id_user}")
    public ResponseEntity<Employee> Obtener_empleado(@PathVariable long id_user){
        Optional<Employee> opt = repository.findById(id_user);

        if (opt.isEmpty()){
           return ResponseEntity.badRequest().build();
        }
        else {
            return ResponseEntity.ok(opt.get());
        }
    }

}
