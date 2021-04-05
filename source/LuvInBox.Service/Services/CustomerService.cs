using AutoMapper;
using com.luvinbox.domain.dtos;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.exceptions;
using com.luvinbox.domain.extensions;
using com.luvinbox.domain.interfaces.repository;
using com.luvinbox.domain.services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace com.luvinbox.service.services {
    public class CustomerService : ICustomerService {
        private ICustomerRepository _repository;
        private IUserService _userService;
        private readonly IMapper _mapper;

        public CustomerService(ICustomerRepository repository, IUserService userService, IMapper mapper) {
            _repository = repository;
            _userService = userService;
            _mapper = mapper;
        }
        public async Task<bool> Delete(string id) {
            return await _repository.Remove(id);
        }
        public async Task<CustomerDTO> Get(string id) {
            var entity = await _repository.Get(id);
            return _mapper.Map<CustomerDTO>(entity) ?? new CustomerDTO();
        }
        public async Task<IEnumerable<CustomerDTO>> GetAll() {
            var listEntity = await _repository.Get();
            return _mapper.Map<IEnumerable<CustomerDTO>>(listEntity);
        }
        public async Task<CustomerDTO> Post(CustomerDTO customer) {
            if (await Validate(customer) && await ResolveUser(customer.User)) {
                var entity = _mapper.Map<Customer>(customer);
                var result = await _repository.Create(entity);

                return _mapper.Map<CustomerDTO>(result);
            }

            return null;
        }
        public async Task<CustomerDTO> Put(string id, CustomerDTO customer) {
            if (await Validate(customer) && await ResolveUser(customer.User)) {
                var entity = _mapper.Map<Customer>(customer);
                var result = await _repository.Update(id, entity);

                return _mapper.Map<CustomerDTO>(result);
            }

            return null;
        }

        private async Task<bool> Validate(CustomerDTO customer) {
            if (await _userService.Validate(customer.User)) {
                if (customer.Birthday.GetAge() < 18)
                    throw new BusinessException("Msg_Invalid_Age");
            }

            return true;
        }
        private async Task<bool> ResolveUser(UserDTO user) {
            var u = await _userService.Post(user);
            return u?.Id != null;
        }
    }
}
