using com.luvinbox.data.repository;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.interfaces.repository;

namespace com.luvinbox.data.implement {
    public class CategoryImplement : BaseRepository<Category>, ICategoryRepository {
        public CategoryImplement(IRepositorySettings settings) : base(settings) {
        }
    }
}
