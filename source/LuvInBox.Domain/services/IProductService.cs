using com.luvinbox.domain.dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace com.luvinbox.domain.services {
    public interface IProductService {
        Task<ProductDTO> Get(string id);
        Task<IEnumerable<ProductDTO>> GetAll();
        Task<ProductDTO> Post(ProductDTO user);
        Task<ProductDTO> Put(string id, ProductDTO user);
        Task<bool> Patch(IEnumerable<ProductDTO> products);
        Task<bool> Delete(string id);
        Task<IEnumerable<ProductDTO>> FindByVendor(string vendorId);
    }
}
