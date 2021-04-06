using com.luvinbox.domain.dtos;
using System.Threading.Tasks;

namespace com.luvinbox.domain.services {
    public interface IShippingService {
        Task<DeliveryDTO> Calculate(ShippingDTO instance);
    }
}
