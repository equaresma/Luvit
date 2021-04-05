using com.luvinbox.domain.interfaces;
using com.luvinbox.domain.services;
using com.luvinbox.service.payment;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace com.luvinbox.service.services {
    public class PaymentService : IPaymentService {
        public async Task<string> DoCheckOut(ICustomer customer, IEnumerable<IOrderItem> items) {
            IPaymentService service = PaymentServiceFactory.GetService();
            return await service.DoCheckOut(customer, items);
        }
    }
}
