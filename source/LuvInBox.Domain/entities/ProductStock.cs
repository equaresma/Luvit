using System;

namespace com.luvinbox.domain.entities {
    public class ProductStock : BaseEntity {
        public string VendorId { get; set; }
        public string ProductId { get; set; }
        public int quantity { get; set; }
        public float? Off { get; set; }
        public DateTime? OffPriceStart { get; set; }
        public DateTime? OffPriceEnd { get; set; }
    }
}
