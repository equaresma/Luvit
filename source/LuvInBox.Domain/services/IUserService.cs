using com.luvinbox.domain.dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace com.luvinbox.domain.services
{
    public interface IUserService
    {
        Task<UserDTO> Get(string id);
        Task<IEnumerable<UserDTO>> GetAll();

        Task<UserDTO> Post(UserDTO user);

        Task<UserDTO> Put(string id, UserDTO user);

        Task Delete(string id);
    }
}
