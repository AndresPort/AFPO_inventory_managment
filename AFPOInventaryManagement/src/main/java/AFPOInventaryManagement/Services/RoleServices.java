package AFPOInventaryManagement.Services;

import AFPOInventaryManagement.Models.Role;
import AFPOInventaryManagement.Repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoleServices {
    //atributes
    @Autowired
    private RoleRepository repository;


    //metods

    //constructor
    public RoleServices(RoleRepository repository) {
        this.repository = repository;
    }

    //create role
    public void createRole(Role role){
        repository.save(role);
    }

    //update role
    public void updateRole (Role role){
        if( role.getIdRole() != null && repository.existsById(role.getIdRole())){
            repository.save(role);
        }
    }

    //delete role
    public void deleteRole (Long idRole){
        if(idRole != null && repository.existsById(idRole)){
            repository.deleteById(idRole);
        }
    }

    // get all roles

    public List<Role> getAllRoles(){
        return repository.findAll();
    }

    //get role by id
    public Role getRoleById(Long idRole){
        if(idRole != null && repository.existsById(idRole)){
            Optional<Role> role= repository.findById(idRole);
            return role.orElse(null);
        }
        return null;
    }

}
