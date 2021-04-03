using com.luvinbox.domain.compose;
using com.luvinbox.domain.Properties;
using System;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.domain.dtos {
    public class ProductDTO : BaseDTO {
        [Required(AllowEmptyStrings = false)]
        [DataType(DataType.Text)]
        public string Reference { get; set; }
        public long? BarCode { get; set; }
        public string VendorId { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredName", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Text)]
        [Display(Name = "lblName", ResourceType = typeof(AppRes))]
        public string Name { get; set; }

        [DataType(DataType.Text)]
        [Display(Name = "lblDescription", ResourceType = typeof(AppRes))]
        public string Description { get; set; }

        [Display(Name = "lblCategory", ResourceType = typeof(AppRes))]
        public string CategoryId { get; set; }

        public Dimensions Dimension { get; set; }

        [Display(Name = "lblPrice", ResourceType = typeof(AppRes))]
        public decimal Price { get; set; }
        [Display(Name = "lblOff", ResourceType = typeof(AppRes))]
        public float? Off { get; set; }

        [Display(Name = "lblOffPrice", ResourceType = typeof(AppRes))]
        public decimal OffPrice {
            get {
                decimal discount = Convert.ToDecimal(Off ?? 0);
                return Price - (Price * discount / 100);
            }
        }
        public int? Stock { get; set; }

        public Image Image { get; set; }

        public ProductDTO() {
            Image = new Image();
        }

        public override string ToString() {
            return string.Format($"{BarCode} - {Name} - {Description}");
        }
    }
}
