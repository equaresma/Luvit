using com.luvinbox.data.repository;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.interfaces.repository;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace com.luvinbox.data.implement {
    public class ProductImplement : BaseRepository<Product>, IProductRepository {
        public ProductImplement(IRepositorySettings settings) : base(settings) {
        }

        public async Task<Product> FindByBarCode(string barcode) {
            var prods = await Find(x => x.Barcode == barcode);
            return prods.FirstOrDefault();
        }

        public async Task<IEnumerable<Product>> FindByCategory(string categoryId) => await Find(x => x.CategoryId == categoryId);

        public async Task<IEnumerable<Product>> FindByFilter(string filter) => await Find(x => x.Name.Contains(filter) || x.Description.Contains(filter));

        public async Task<Product> FindByMPN(string mpn) {
            var prods = await Find(x => x.MPN == mpn);
            return prods.FirstOrDefault();
        }

        public async Task<Product> FindBySKU(string sku) {
            var prods = await Find(x => x.SKU == sku);
            return prods.FirstOrDefault();
        }

        public new async Task<bool> InsertMany(IEnumerable<Product> products) {
            await base.InsertMany(products);
            return true;
        }
    }
}
