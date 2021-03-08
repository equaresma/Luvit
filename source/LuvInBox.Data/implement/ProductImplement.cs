using com.luvinbox.data.repository;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.repository.interfaces;
using com.luvinbox.domain.repository.interfaces.repository;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace com.luvinbox.data.implement {
    public class ProductImplement : BaseRepository<Product>, IProductRepository {
        public ProductImplement(IRepositorySettings settings) : base(settings) {
        }

        public async Task<IEnumerable<Product>> FindByVendor(string vendorId) { 
            return await Find(x => x.VendorId == vendorId);
        }
    }
}
