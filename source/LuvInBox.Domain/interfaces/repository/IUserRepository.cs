using com.luvinbox.domain.entities;
using System.Threading.Tasks;

namespace com.luvinbox.domain.repository.interfaces.repository
{
    public interface IUserRepository : IRepository<User>
    {
        Task<User> FindByLogin(string email);
    }
}
