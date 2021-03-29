using com.luvinbox.domain.compose;

namespace com.luvinbox.domain.entities {
    public class Product : BaseEntity {
        public string Reference { get; set; }
        public long? Barcode { get; set; }
        public string VendorId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string CategoryId { get; set; }
        public Dimensions Dimension { get; set; }
        public decimal Price { get; set; }
        public float? Off { get; set; }
        public Image Image { get; set; }
    }
}
