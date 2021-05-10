using com.luvinbox.domain.compose;
using com.luvinbox.domain.enums;
using com.luvinbox.domain.Properties;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.domain.dtos {
    public class ProductDTO : BaseDTO {

        [DataType(DataType.Text)]
        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredSKU", ErrorMessageResourceType = typeof(AppRes))]
        [Display(Name = "lblSKU", ResourceType = typeof(AppRes))]
        public string SKU { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredMPN", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Text)]
        [Display(Name = "lblMPN", ResourceType = typeof(AppRes))]
        public string MPN { get; set; }
        [DataType(DataType.Text)]
        [Display(Name = "lblBarCode", ResourceType = typeof(AppRes))]
        public long? BarCode { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredName", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Text)]
        [Display(Name = "lblName", ResourceType = typeof(AppRes))]
        public string Name { get; set; }

        [DataType(DataType.Text)]
        [Display(Name = "lblDescription", ResourceType = typeof(AppRes))]
        public string Description { get; set; }

        #region .:Category:.
        [Display(Name = "lblCategory", ResourceType = typeof(AppRes))]
        public string CategoryId { get; set; }
        public string CategoryName { get; set; }
        #endregion
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
        public IEnumerable<string> Sizes { get; set; }
        public override string ToString() {
            return string.Format($"{BarCode} - {Name} - {Description}");
        }
    }
}
