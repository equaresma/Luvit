using com.luvinbox.domain.dtos;
using System.Threading.Tasks;

namespace com.luvinbox.domain.services {
    public interface IPaymentService {
        Task<string> DoCheckOut(PaymentDTO payment);
    }
}
