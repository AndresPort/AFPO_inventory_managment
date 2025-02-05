package AFPOInventaryManagement.Services;

import AFPOInventaryManagement.Models.User;
import AFPOInventaryManagement.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public void createUser(User user){
        repository.save(user);
    }

    //update user
    public void updateUser (User user){
        if(user.getIdUser() != null && repository.existsById(user.getIdUser())){
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

    //get user by id
    public User getUserById(Long idUser){
        if(idUser != null && repository.existsById(idUser)){
            Optional<User> user= repository.findById(idUser);
            return user.orElse(null);
        }

        return null;
    }

    //get user by userCode

    public User getUserByUserCode (String userCode){
        if(userCode != null  ){
            Optional<User> user= repository.findUserByUserCode(userCode);
            return user.orElse(null);
        }
        return null;
    }
}
