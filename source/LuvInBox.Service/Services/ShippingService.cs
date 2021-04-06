using com.luvinbox.domain.dtos;
using com.luvinbox.domain.services;
using com.luvinbox.service.Delivery;
using System.Threading.Tasks;

namespace com.luvinbox.service.services {
    public class ShippingService : IShippingService {

        public async Task<DeliveryDTO> Calculate(ShippingDTO instance) {
            var service = new CorreiosShippingService();
            return await service.Calculate(instance);
        }
    }
}
