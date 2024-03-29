using com.luvinbox.data.repository;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.interfaces.repository;
using System.Linq;
using System.Threading.Tasks;

namespace com.luvinbox.data.implement {
    public class LoginImplement : BaseRepository<Login>, ILoginRepository {
        public LoginImplement(IRepositorySettings settings) : base(settings) {
        }
        public async Task<Login> FindByLogin(string name) {
            var list = await Find(x => x.Name == name);
            return list.FirstOrDefault();
        }
        public async Task<Login> FindLastLogin(string name) {
            var list = await Find(x => x.Name == name);
            return list.LastOrDefault();
        }
    }
}
