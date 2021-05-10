using com.luvinbox.data.repository;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.interfaces.repository;

namespace com.luvinbox.data.implement {
    public class SizeImplement : BaseRepository<Size>, ISizeRepository {
        public SizeImplement(IRepositorySettings settings) : base(settings) {
        }
    }
}
