using com.luvinbox.domain.entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace com.luvinbox.domain.interfaces.repository {
    public interface IProductRepository : IRepository<Product> {
        Task<IEnumerable<Product>> FindByVendor(string vendorId);
        Task<IEnumerable<Product>> FindByCategory(string categoryId);
        Task<IEnumerable<Product>> FindByFilter(string filter);
        Task<IEnumerable<Product>> FindByPromotions();
        Task<bool> InsertMany(IEnumerable<Product> products);
    }
}