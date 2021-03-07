using com.luvinbox.domain.dtos;
using System.Threading.Tasks;

namespace com.luvinbox.domain.services
{
    public interface ILoginService
    {
        Task<AuthDTO> FindByLogin(LoginDTO login);
        Task<LoginDTO> Put(string id, LoginDTO login);
        Task<bool> Logoff(string username);
    }
}
