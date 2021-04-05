using com.luvinbox.domain.interfaces.payment;
using com.luvinbox.domain.Properties;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.domain.compose {
    public class PaymentInfo : IPaymentInfo {
        private string _paymentStatus;

        [Display(Name = "lblPaymentId", ResourceType = typeof(AppRes))]
        public virtual string PaymentId { get; set; }

        [Display(Name = "lblPaymentToken", ResourceType = typeof(AppRes))]
        public virtual string PaymentToken { get; set; }

        [Display(Name = "lblPaymentSuccess", ResourceType = typeof(AppRes))]
        public virtual bool PaymentSuccess { get; set; }

        [Display(Name = "lblPaymentStatus", ResourceType = typeof(AppRes))]
        public virtual string PaymentStatus {
            get { return _paymentStatus; }
            set {
                PaymentPreviousStatus = _paymentStatus;
                _paymentStatus = value;
            }
        }

        [Display(Name = "lblPaymentPreviousStatus", ResourceType = typeof(AppRes))]
        public virtual string PaymentPreviousStatus { get; set; }

        [Display(Name = "lblPaymentForm", ResourceType = typeof(AppRes))]
        public virtual string PaymentForm { get; set; }

        [Display(Name = "lblPaymentType", ResourceType = typeof(AppRes))]
        public virtual string PaymentType { get; set; }

        [Display(Name = "lblIsPaid", ResourceType = typeof(AppRes))]
        public bool IsPaid { get; set; }
    }
}
