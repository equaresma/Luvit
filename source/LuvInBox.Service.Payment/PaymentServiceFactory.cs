using com.luvinbox.domain.interfaces.payment;
using com.luvinbox.domain.services;
using LuvInBox.Service.Payment.mercadopago;

namespace com.luvinbox.service.payment {
    public static class PaymentServiceFactory {
        public static IPaymentService GetService() {
            return new MercadoPagoIntegration();
        }
    }
}
