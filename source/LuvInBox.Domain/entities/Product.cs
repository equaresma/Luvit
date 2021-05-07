using com.luvinbox.domain.compose;
using com.luvinbox.domain.enums;
using System.Collections.Generic;

namespace com.luvinbox.domain.entities {
    public class Product : BaseEntity {
        public long? Barcode { get; set; }
        public int? SKU { get; set; }
        public string MPN { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string CategoryId { get; set; }
        public Dimensions Dimension { get; set; }                
        public string Brand { get; set; }
        public string Origin { get; set; }
        public string Manufacturer { get; set; }
        public string CompleteDescription { get; set; }
        public string Material { get; set; }
        public string Usage { get; set; }
        public string Care { get; set; }
        public string Color { get; set; }
        public IEnumerable<Image> Images { get; set; }
        public enumProductStatus Status { get; set; }
    }
}
