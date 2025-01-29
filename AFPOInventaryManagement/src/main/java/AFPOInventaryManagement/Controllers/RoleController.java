package AFPOInventaryManagement.Controllers;

import AFPOInventaryManagement.Models.Role;
import AFPOInventaryManagement.Services.RoleServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RoleController {
    //atributes
    private Role rol = new Role();
    @Autowired
    private RoleServices services;

    //metods

    //CONSTRUCTOR
    public RoleController(RoleServices services) {
        this.services = services;
    }

    //CRUD
    //Create Role
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping("/api/createRole/{rolName}")
    public ResponseEntity<String> createRole(@PathVariable String rolName){
        this.rol.setRolName(rolName);
        services.createRole(this.rol);
        return ResponseEntity.ok("Role created successfully");
    }

    //get all roles
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getAllRoles")
    public List<Role> getAllRoles(){
        return services.getAllRoles();
    }

    //get role by id
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getRoleById/{idRole}")
    public Role getRoleById(@PathVariable Long idRole) {
        return (services.getRoleById(idRole));
    }

    //Update Role
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PutMapping("/api/updateRole")
    public void updateRole(@RequestBody Role role) {
        services.updateRole(role);
    }

    //DeleteRole
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @DeleteMapping("/api/deleteRole/{idRole}")
    public void deleteRole(@PathVariable Long idRole) {
        services.deleteRole(idRole);
    }


}
