package AFPOInventaryManagement.Repositories;
import AFPOInventaryManagement.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    //Optional<User> findByUserCode(String userCode);
}
