using AutoMapper;
using com.luvinbox.data.implement;
using com.luvinbox.domain.dtos;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LuvInBox.Service.Services {
    public class ProductService : IProductService {
        private ProductImplement _repository;
        private readonly IMapper _mapper;

        public ProductService(ProductImplement repository, IMapper mapper) {
            _repository = repository;
            _mapper = mapper;
        }
        
        public async Task<ProductDTO> Get(string id) {
            var entity = await _repository.Get(id);
            return _mapper.Map<ProductDTO>(entity) ?? new ProductDTO();
        }
        public async Task<IEnumerable<ProductDTO>> GetAll() {
            var listEntity = await _repository.Get();
            return _mapper.Map<IEnumerable<ProductDTO>>(listEntity);
        }
        public async Task<ProductDTO> Post(ProductDTO user) {
            var entity = _mapper.Map<Product>(user);
            var result = await _repository.Create(entity);

            return _mapper.Map<ProductDTO>(result);
        }
        public async Task<ProductDTO> Put(string id, ProductDTO user) {
            var entity = _mapper.Map<Product>(user);
            var result = await _repository.Update(id, entity);

            return _mapper.Map<ProductDTO>(result);
        }
        public async Task<bool> Delete(string id) {
            return await _repository.Remove(id);
        }
        public async Task<IEnumerable<ProductDTO>> FindByVendor(string vendorId) {
            var listEntity = await _repository.FindByVendor(vendorId);
            return _mapper.Map<IEnumerable<ProductDTO>>(listEntity);
        }
    }
}
