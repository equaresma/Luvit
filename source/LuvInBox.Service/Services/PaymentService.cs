using com.luvinbox.domain.dtos;
using com.luvinbox.domain.services;
using com.luvinbox.service.payment;
using System.Threading.Tasks;

namespace com.luvinbox.service.services {
    public class PaymentService : IPaymentService {
        public async Task<string> DoCheckOut(PaymentDTO payment) {
            IPaymentService service = PaymentServiceFactory.GetService();
            return await service.DoCheckOut(payment);
        }
    }
}
