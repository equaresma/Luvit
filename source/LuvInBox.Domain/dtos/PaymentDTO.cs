using System.Collections.Generic;

namespace com.luvinbox.domain.dtos {
    public class PaymentDTO {
        public PayerDTO Payer { get; set; }
        public IEnumerable<OrderItemDTO> Items { get; set; }
    }
}
