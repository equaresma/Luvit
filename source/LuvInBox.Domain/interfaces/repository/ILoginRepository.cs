using com.luvinbox.domain.entities;
using System.Threading.Tasks;

namespace com.luvinbox.domain.repository.interfaces.repository {
    public interface ILoginRepository : IRepository<Login> {
        Task<Login> FindByLogin(string email);
        Task<Login> FindLastLogin(string email);
    }
}
