using com.luvinbox.domain.dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace com.luvinbox.domain.services {
    public interface ISizeService
    {
        Task<SizeDTO> Get(string id);
        Task<IEnumerable<SizeDTO>> GetAll();

        Task<SizeDTO> Post(SizeDTO Size);

        Task<SizeDTO> Put(string id, SizeDTO Size);

        Task<bool> Delete(string id);

        Task<bool> Validate(SizeDTO Size);
    }
}
