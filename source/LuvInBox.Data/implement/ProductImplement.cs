using com.luvinbox.data.repository;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.interfaces.repository;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace com.luvinbox.data.implement {
    public class ProductImplement : BaseRepository<Product>, IProductRepository {
        public ProductImplement(IRepositorySettings settings) : base(settings) {
        }

        public async Task<IEnumerable<Product>> FindByCategory(string categoryId) {
            return await Find(x=> x.CategoryId == categoryId);
        }

        public async Task<IEnumerable<Product>> FindByFilter(string filter) {
            return await Find(x => x.Name.Contains(filter) || x.Description.Contains(filter));
        }

        public async Task<IEnumerable<Product>> FindByPromotions() {
            return await Find(x => x.Off.HasValue && x.Off.Value > 0 );
        }

        public async Task<IEnumerable<Product>> FindByVendor(string vendorId) {
            return await Find(x => x.VendorId == vendorId);
        }

        public new async Task<bool> InsertMany(IEnumerable<Product> products) {
            await base.InsertMany(products);
            return true;
        }
    }
}
