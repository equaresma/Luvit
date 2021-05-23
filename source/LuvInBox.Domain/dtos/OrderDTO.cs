using com.luvinbox.domain.compose;
using System;
using System.Collections.Generic;

namespace com.luvinbox.domain.dtos {
    [Serializable]
    public class OrderDTO : BaseDTO {

        public DateTime Position { get; set; }
        public string CustomerId { get; set; }
        public string CustomerName { get; set; }
        public IEnumerable<OrderItemDTO> Items { get; set; }
        //frete
        public decimal Shipping { get; set; }
        public Address Address { get; set; }
        public PaymentInfo Payment { get; set; }

        public OrderDTO() {

        }
    }
}
