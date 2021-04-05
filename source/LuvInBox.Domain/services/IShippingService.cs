using com.luvinbox.domain.dtos;
using System.Threading.Tasks;

namespace com.luvinbox.domain.services {
    public interface IShipingService {
        Task<DeliveryDTO> Calculate(ShippingDTO instance);
    }
}
