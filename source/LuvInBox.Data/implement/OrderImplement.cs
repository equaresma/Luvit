using com.luvinbox.data.repository;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.interfaces.repository;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace com.luvinbox.data.implement {
    public class OrderImplement : BaseRepository<Order>, IOrderRepository {
        public OrderImplement(IRepositorySettings settings) : base(settings) {

        }

        public async Task<IEnumerable<Order>> FindByCustomer(string customerId) {
            return await Find(o=> o.CustomerId == customerId);
        }

        public async Task<IEnumerable<Order>> FindByDate(DateTime date) {
            return await Find(o => o.Position == date);
        }

        public async Task<IEnumerable<Order>> FindByVendor(string vendorId, DateTime date) {
            return await Find(o => o.Position == date && o.Items.Exists(i => i.VendorId == vendorId));
        }
    }
}
