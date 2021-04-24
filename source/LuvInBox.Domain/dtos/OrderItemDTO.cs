using com.luvinbox.domain.interfaces;
using System;

namespace com.luvinbox.domain.dtos {
    [Serializable]
    public class OrderItemDTO : BaseDTO, IOrderItem {
        public string VendorId { get; set; }
        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public string CurrencyId { get; set; }
        public string Tag { get; set; }
        public ShippingDTO Shipping { get; set; }

        public OrderItemDTO() {
            CurrencyId = "BRL";
        }
    }
}
