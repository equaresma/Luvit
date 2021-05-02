using com.luvinbox.data.repository;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.interfaces.repository;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace com.luvinbox.data.implement {
    public class ProductStockImplement : BaseRepository<ProductStock>, IProductStockRepository {
        public ProductStockImplement(IRepositorySettings settings) : base(settings) {
        }

        public async Task<IEnumerable<ProductStock>> FindByVendor(string vendorId) {
            return await Find(x => x.VendorId == vendorId);
        }
    }
}
