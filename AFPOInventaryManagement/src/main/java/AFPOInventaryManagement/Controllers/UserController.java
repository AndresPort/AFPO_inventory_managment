package AFPOInventaryManagement.Controllers;

import AFPOInventaryManagement.Models.User;
import AFPOInventaryManagement.Services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    //atributes
    @Autowired
    private UserServices services;

    //metods
    //constructor
    public UserController(UserServices services) {
        this.services = services;
    }

    //create user
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping("/api/createUser")
    public void createUser(@RequestBody User user){
        services.createUser(user);
        //no voy a hacer que retorne un mensaje de confirmacion de tipo ResponseEntity.ok
        //porque igualmente por el manejo de exepciones del front end puedo saber si el
        // funcionamiento es correcto o no
    }

    //update user
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PutMapping("/api/updateUser")
    public void updateUser(@RequestBody User user) {
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
    public void getUserById(@PathVariable Long idUser) {
        User user = services.getUserById(idUser);
    }
}
