using AutoMapper;
using com.luvinbox.domain.dtos;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.exceptions;
using com.luvinbox.domain.interfaces.repository;
using com.luvinbox.domain.services;
using System.Threading.Tasks;

namespace com.luvinbox.service.services {
    public class OrderService : IOrderService {
        private IOrderRepository _repository;
        private readonly IMapper _mapper;

        public OrderService(IOrderRepository repository, IMapper mapper)  {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<string> Post(OrderDTO order) {
            if (Validate(order)) {
                var entity = _mapper.Map<Order>(order);
                var result = await _repository.Create(entity);

                return result.Id;
            }

            return null;
        }

        public bool Validate(OrderDTO order) {
            if (string.IsNullOrWhiteSpace(order.CustomerId))
                    throw new BusinessException("Msg_Err_Vendor_Missing");
            
            if (string.IsNullOrWhiteSpace(order.CustomerId))
                throw new BusinessException("Msg_Err_Customer_Missing");

            return true;
        }
    }
}

