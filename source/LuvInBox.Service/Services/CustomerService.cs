using AutoMapper;
using com.luvinbox.domain.dtos;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.repository.interfaces.repository;
using com.luvinbox.domain.services;
using com.luvinbox.domain.extensions;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;

namespace LuvInBox.Service.Services {
    public class CustomerService : ICustomerService {
        private ICustomerRepository _repository;
        private IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public CustomerService(ICustomerRepository repository, IUserRepository userRepository, IMapper mapper) {
            _repository = repository;
            _userRepository = userRepository;
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
            if (Validate(customer)) {
                var entity = _mapper.Map<Customer>(customer);
                var result = await _repository.Create(entity);

                return _mapper.Map<CustomerDTO>(result);
            }

            return null;
        }
        public async Task<CustomerDTO> Put(string id, CustomerDTO customer) {
            if (Validate(customer)) {
                var entity = _mapper.Map<Customer>(customer);
                var result = await _repository.Update(id, entity);

                return _mapper.Map<CustomerDTO>(result);
            }

            return null;
        }

        private bool Validate(CustomerDTO customer) {
            var currentUser = _userRepository.FindByLogin(customer.Email);

            if (currentUser != null)
                throw new ValidationException($"{customer.Email} already exists");

            if (customer.Birthday.GetAge() < 18)
                throw new ValidationException($"{customer.Birthday} invalid birthday");

            return true;
        }
    }
}
