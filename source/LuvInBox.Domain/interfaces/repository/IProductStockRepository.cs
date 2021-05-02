using com.luvinbox.domain.entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace com.luvinbox.domain.interfaces.repository {
    public interface IProductStockRepository : IRepository<ProductStock> {
        Task<IEnumerable<ProductStock>> FindByVendor(string vendorId);
    }
}