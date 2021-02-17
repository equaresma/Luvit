using com.luvinbox.domain.dtos;
using System.Threading.Tasks;

namespace com.luvinbox.domain.services
{
    public interface ILoginService
    {
        Task<object> FindByLogin(LoginDTO login);
        Task<LoginDTO> Put(string id, LoginDTO login);
    }
}
