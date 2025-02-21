package AFPOInventaryManagement.Repositories;

import AFPOInventaryManagement.Models.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category,Long> {
    List<Category> findCategoryByCategoryName(String categoryName);
}
