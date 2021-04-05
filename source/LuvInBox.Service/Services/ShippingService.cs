using com.luvinbox.domain.dtos;
using com.luvinbox.domain.services;
using com.luvinbox.service.Delivery;
using System.Threading.Tasks;

namespace com.luvinbox.service.services {
    public class ShipingService : IShipingService {

        public async Task<DeliveryDTO> Calculate(ShippingDTO instance) {
            var service = new CorreiosShipingService();
            return await service.Calculate(instance);
        }
    }
}
