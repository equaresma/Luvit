using AutoMapper;
using com.luvinbox.domain.dtos;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.repository.interfaces;
using com.luvinbox.domain.services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LuvInBox.Service.Services
{
    public class CustomerService : ICustomerService
    {
        private IRepository<Customer> _repository;
        private readonly IMapper _mapper;

        public CustomerService(IRepository<Customer> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        public async Task<bool> Delete(string id)
        {
            return await _repository.Remove(id);
        }
        public async Task<CustomerDTO> Get(string id)
        {
            var entity = await _repository.Get(id);
            return _mapper.Map<CustomerDTO>(entity) ?? new CustomerDTO();
        }
        public async Task<IEnumerable<CustomerDTO>> GetAll()
        {
            var listEntity = await _repository.Get();
            return _mapper.Map<IEnumerable<CustomerDTO>>(listEntity);
        }
        public async Task<CustomerDTO> Post(CustomerDTO user)
        {
            var entity = _mapper.Map<Customer>(user);
            var result = await _repository.Create(entity);

            return _mapper.Map<CustomerDTO>(result);
        }
        public async Task<CustomerDTO> Put(string id, CustomerDTO user)
        {
            var entity = _mapper.Map<Customer>(user);
            var result = await _repository.Update(id, entity);

            return _mapper.Map<CustomerDTO>(result);
        }
    }
}
