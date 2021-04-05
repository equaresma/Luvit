using System.Collections.Generic;

namespace com.luvinbox.domain.interfaces.payment {
    public interface IPaymentRequest {
        public string Key { get; set; }
        public string Token { get; set; }
        public ICustomer Customer { get; set; }
        public IEnumerable<IOrderItem> OrderItens { get; set; }
    }
}
