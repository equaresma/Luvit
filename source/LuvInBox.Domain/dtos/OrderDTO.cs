using com.luvinbox.domain.Properties;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.domain.dtos
{
    [Serializable]
    public class OrderDTO : BaseDTO
    {
        private String _paymentStatus;

        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredDate", ErrorMessageResourceType = typeof(AppRes))]
        [Display(Name = "lblPosition", ResourceType = typeof(AppRes))]
        public DateTime Position { get; set; }

        public String CustomerId { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredCustomerName", ErrorMessageResourceType = typeof(AppRes))]
        [Display(Name = "lblCustomer", ResourceType = typeof(AppRes))]
        public String CustomerName { get; set; }

        public List<OrderItemDTO> Items { get; set; }

        [Display(Name = "lblPaymentId", ResourceType = typeof(AppRes))]
        public String PaymentId { get; set; }

        [Display(Name = "lblPaymentToken", ResourceType = typeof(AppRes))]
        public String PaymentToken { get; set; }

        [Display(Name = "lblPaymentSuccess", ResourceType = typeof(AppRes))]
        public Boolean PaymentSuccess { get; set; }

        [Display(Name = "lblPaymentStatus", ResourceType = typeof(AppRes))]
        public String PaymentStatus
        {
            get { return _paymentStatus; }
            set
            {
                PaymentPreviousStatus = _paymentStatus;
                _paymentStatus = value;
            }
        }

        [Display(Name = "lblPaymentPreviousStatus", ResourceType = typeof(AppRes))]
        public String PaymentPreviousStatus { get; set; }

        [Display(Name = "lblPaymentForm", ResourceType = typeof(AppRes))]
        public String PaymentForm { get; set; }

        [Display(Name = "lblPaymentType", ResourceType = typeof(AppRes))]
        public String PaymentType { get; set; }

        public DateTime Created { get; set; }

        public string Creator { get; set; }

        public DateTime LastUpdate { get; set; }

        public string UserLastUpdate { get; set; }

        [Display(Name = "lblIsPaid", ResourceType = typeof(AppRes))]
        public Boolean IsPaid { get; set; }

        public OrderDTO()
        {
            Items = new List<OrderItemDTO>();
        }
    }
}
