using com.luvinbox.domain.entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace com.luvinbox.domain.interfaces.repository {
    public interface IOrderRepository : IRepository<Order> {
        Task<IEnumerable<Order>> FindByCustomer(string customerId);
        Task<IEnumerable<Order>> FindByDate(DateTime date);
        Task<IEnumerable<Order>> FindByVendor(string vendorId, DateTime date);
    }
}