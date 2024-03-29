using com.luvinbox.data.repository;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.interfaces.repository;
using System.Linq;
using System.Threading.Tasks;

namespace com.luvinbox.data.implement {
    public class UserImplement : BaseRepository<User>, IUserRepository {
        public UserImplement(IRepositorySettings settings) : base(settings) {
        }

        public async Task<User> FindByLogin(string email) {
            var list = await Find(x => x.Name == email);
            return list.FirstOrDefault();
        }
    }
}
