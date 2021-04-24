using com.luvinbox.domain.compose;
using com.luvinbox.domain.Properties;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.domain.dtos
{
    [Serializable]
    public class OrderDTO : BaseDTO
    {
        private PaymentInfo payment;

        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredDate", ErrorMessageResourceType = typeof(AppRes))]
        [Display(Name = "lblPosition", ResourceType = typeof(AppRes))]
        public DateTime Position { get; set; }
        public string CustomerId { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredCustomerName", ErrorMessageResourceType = typeof(AppRes))]
        [Display(Name = "lblCustomer", ResourceType = typeof(AppRes))]
        public string CustomerName { get; set; }
        public List<OrderItemDTO> Items { get; set; }
        //frete
        public decimal Shipping { get; set; }
        public Address Address { get; set; }
        public PaymentInfo Payment { get => payment; set => payment = value; }

        public OrderDTO()
        {
            Items = new List<OrderItemDTO>();
        }
    }
}
