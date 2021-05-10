using com.luvinbox.domain.entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace com.luvinbox.domain.interfaces.repository {
    public interface IProductRepository : IRepository<Product> {
        Task<Product> FindBySKU(string sku);
        Task<Product> FindByMPN(string mpn);
        Task<Product> FindByBarCode(string barcode);
        Task<IEnumerable<Product>> FindByCategory(string categoryId);
        Task<IEnumerable<Product>> FindByFilter(string filter);
        Task<bool> InsertMany(IEnumerable<Product> products);
    }
}