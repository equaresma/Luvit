using com.luvinbox.domain.interfaces;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace com.luvinbox.domain.services {
    public interface IPaymentService {
        Task<string> DoCheckOut(ICustomer customer, IEnumerable<IOrderItem> items);
    }
}
