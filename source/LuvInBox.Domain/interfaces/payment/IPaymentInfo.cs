namespace com.luvinbox.domain.interfaces.payment {
    public interface IPaymentInfo {
        string PaymentForm { get; set; }
        string PaymentId { get; set; }
        string PaymentPreviousStatus { get; set; }
        string PaymentStatus { get; set; }
        bool PaymentSuccess { get; set; }
        string PaymentToken { get; set; }
        string PaymentType { get; set; }
    }
}