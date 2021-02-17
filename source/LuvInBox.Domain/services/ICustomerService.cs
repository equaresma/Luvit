using com.luvinbox.domain.dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace com.luvinbox.domain.services
{
    public interface ICustomerService
    {
        Task<CustomerDTO> Get(string id);
        Task<IEnumerable<CustomerDTO>> GetAll();

        Task<CustomerDTO> Post(CustomerDTO user);

        Task<CustomerDTO> Put(string id, CustomerDTO user);

        Task<bool> Delete(string id);
    }
}
