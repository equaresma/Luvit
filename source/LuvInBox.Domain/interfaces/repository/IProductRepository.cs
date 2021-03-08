using com.luvinbox.domain.entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace com.luvinbox.domain.repository.interfaces.repository {
    public interface IProductRepository : IRepository<Product> {
        Task<IEnumerable<Product>> FindByVendor(string vendorId);
    }
}