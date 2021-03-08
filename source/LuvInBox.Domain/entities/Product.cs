using com.luvinbox.domain.compose;
using com.luvinbox.domain.enums;
using System;

namespace com.luvinbox.domain.entities
{
    public class Product : BaseEntity
    {
        public string Reference { get; set; }
        public Int32? Barcode { get; set; }
        public string VendorId { get; set; }
        public String Name { get; set; }
        public String Description { get; set; }
        public String ImageURL { get; set; }
        public enumProductCategory? Category { get; set; }
        public Dimensions Dimension { get; set; }
        public Decimal Price { get; set; }
        public float? Off { get; set; }

        public Product()
        {
        }
    }
}
