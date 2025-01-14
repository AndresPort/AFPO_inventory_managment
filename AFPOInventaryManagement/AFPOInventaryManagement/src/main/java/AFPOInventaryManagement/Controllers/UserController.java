package AFPOInventaryManagement.Controllers;

import AFPOInventaryManagement.Models.User;
import AFPOInventaryManagement.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserServices services;

    public UserController(UserServices services) {
        this.services = services;
    }

    //create user

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping("/api/createUser")
    public ResponseEntity<String> createUser(@RequestBody User user){
        services.createUsers(user);
        return ResponseEntity.ok("User created successfully");
    }

    //update user
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PutMapping("/api/updateUser")
    public void actualizarEmpleado(@RequestBody User user) {
        services.updateUser(user);
    }

    //delete user

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @DeleteMapping("/api/deleteUser/{idUser}")
    public void deleteUser(@PathVariable Long idUser) {
        services.deleteUser(idUser);
    }


    // get all users
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getAllUsers")
    public List<User> getAllUsers(){
        return services.getAllUsers();
    }

    //get user by id

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/api/getUser/{idUser}")
    public ResponseEntity<User> getUser(@PathVariable Long idUser) {
        User user = services.getUser(idUser);
        return ResponseEntity.ok(user);
    }

    //get user by userCode
    @CrossOrigin(origins = "*")
    @GetMapping("/api/getUserByUserCode/{userCode}")
    public ResponseEntity<User> getUserByUserCode(@PathVariable String userCode) {
        User user = services.getUserByUserCode(userCode);
        if (user != null) {
            return ResponseEntity.ok(user); // Usuario encontrado, devolver 200 OK con el usuario
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build(); // Usuario no encontrado, devolver 404
        }
    }

}
