using com.luvinbox.domain.dtos;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace com.luvinbox.domain.services {
    public interface IProductStockService {
        Task<ProductStockDTO> Get(string id);
        Task<ProductStockDTO> Post(ProductStockDTO user);
        Task<ProductStockDTO> Put(string id, ProductStockDTO user);
        Task<bool> Delete(string id);
        Task<IEnumerable<ProductStockDTO>> FindByVendor(string vendorId);
    }
}
