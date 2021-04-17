using com.luvinbox.domain.interfaces;
using System.Collections.Generic;

namespace com.luvinbox.domain.dtos {
    public class PaymentDTO {
        public ICustomer Customer { get; set; }
        public IEnumerable<IOrderItem> Items { get; set; }
    }
}
