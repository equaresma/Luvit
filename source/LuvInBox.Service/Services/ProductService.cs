using AutoMapper;
using com.luvinbox.domain.dtos;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.repository.interfaces;
using com.luvinbox.domain.services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LuvInBox.Service.Services
{
    public class ProductService : IProductService
    {
        private IRepository<Product> _repository;
        private readonly IMapper _mapper;

        public ProductService(IRepository<Product> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<ProductDTO> Get(string id)
        {
            var entity = await _repository.Get(id);
            return _mapper.Map<ProductDTO>(entity) ?? new ProductDTO();
        }

        public async Task<IEnumerable<ProductDTO>> GetAll()
        {
            var listEntity = await _repository.Get();
            return _mapper.Map<IEnumerable<ProductDTO>>(listEntity);
        }

        public async Task<ProductDTO> Post(ProductDTO user)
        {
            var entity = _mapper.Map<Product>(user);
            var result = await _repository.Create(entity);

            return _mapper.Map<ProductDTO>(result);
        }

        public async Task<ProductDTO> Put(string id, ProductDTO user)
        {
            var entity = _mapper.Map<Product>(user);
            var result = await _repository.Update(id, entity);

            return _mapper.Map<ProductDTO>(result);
        }

        public async Task<bool> Delete(string id)
        {
            return await _repository.Remove(id);
        }
    }
}
