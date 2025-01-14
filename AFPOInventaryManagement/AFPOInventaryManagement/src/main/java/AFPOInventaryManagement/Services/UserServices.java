package AFPOInventaryManagement.Services;
import AFPOInventaryManagement.Models.User;
import AFPOInventaryManagement.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class UserServices {
    //atributes
    @Autowired
    private UserRepository repository;

    //metods

    //constructor
    public UserServices(UserRepository repository) {
        this.repository = repository;
    }

    //create user

    public ResponseEntity<String> createUsers(User user){
        repository.save(user);
        return ResponseEntity.ok("User created successfully");

    }

    //update user
    public void updateUser (User user){
        if( user.getIdUser() != null && repository.existsById(user.getIdUser())){
            repository.save(user);
        }
    }

    //delete user
    public void deleteUser (Long idUser){
        if(idUser != null && repository.existsById(idUser)){
            repository.deleteById(idUser);
        }
    }

    // get all users

    public List<User> getAllUsers(){
        return repository.findAll();
    }

    //get user
    public User getUser(Long idUser){
        if(idUser != null && repository.existsById(idUser)){
            Optional<User> user= repository.findById(idUser);
            return user.orElse(null);
        }

        return null;
    }

    //get user by userCode

    public User getUserByUserCode (String userCode){
        if(userCode != null  ){
            Optional<User> user= repository.findByUserCode(userCode);
            return user.orElse(null);
        }
        return null;
    }
}


