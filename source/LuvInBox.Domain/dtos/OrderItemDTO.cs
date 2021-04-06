using com.luvinbox.domain.interfaces;
using com.luvinbox.domain.Properties;
using System;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.domain.dtos {
    [Serializable]
    public class OrderItemDTO : BaseDTO, IOrderItem {
        public string ProductId { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredName", ErrorMessageResourceType = typeof(AppRes))]
        [Display(Name = "lblProduct", ResourceType = typeof(AppRes))]
        public string ProductName { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredDescription", ErrorMessageResourceType = typeof(AppRes))]
        [Display(Name = "lblDescription", ResourceType = typeof(AppRes))]
        public string ProductDescription { get; set; }

        [Display(Name = "lblPrice", ResourceType = typeof(AppRes))]
        public int Quantity { get; set; }

        [DataType(DataType.Currency)]
        [Display(Name = "lblPrice", ResourceType = typeof(AppRes))]
        public decimal UnityPrice { get; set; }
        public string CurrencyId { get; set; }

        public string Tag { get; set; }

        public OrderItemDTO() {
            CurrencyId = "BRL";
        }

    }
}
