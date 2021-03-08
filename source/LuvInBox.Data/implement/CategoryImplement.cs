using com.luvinbox.data.repository;
using com.luvinbox.domain.entity;
using com.luvinbox.domain.interfaces.repository;
using com.luvinbox.domain.repository.interfaces;

namespace com.luvinbox.data.implement {
    public class CategoryImplement : BaseRepository<Category>, ICategoryRepository {
        public CategoryImplement(IRepositorySettings settings) : base(settings) {
        }
    }
}
