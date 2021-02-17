using com.luvinbox.domain.dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace com.luvinbox.domain.services
{
    public interface IVendorService
    {
        Task<VendorDTO> Get(string id);
        Task<IEnumerable<VendorDTO>> GetAll();

        Task<VendorDTO> Post(VendorDTO user);

        Task<VendorDTO> Put(string id, VendorDTO user);

        Task Delete(string id);
    }
}
