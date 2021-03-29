using AutoMapper;
using com.luvinbox.domain.dtos;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.interfaces.repository;
using com.luvinbox.domain.services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LuvInBox.Service.Services {
    public class ProductService : IProductService {
        private IProductRepository _repository;
        private readonly IMapper _mapper;

        public ProductService(IProductRepository repository, IMapper mapper) {
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
        public async Task<ProductDTO> Post(ProductDTO product) {
            var entity = _mapper.Map<Product>(product);
            var result = await _repository.Create(entity);

            return _mapper.Map<ProductDTO>(result);
        }
        public async Task<ProductDTO> Put(string id, ProductDTO product) {
            var entity = _mapper.Map<Product>(product);
            var result = await _repository.Update(id, entity);

            return _mapper.Map<ProductDTO>(result);
        }
        public async Task<bool> Patch(IEnumerable<ProductDTO> products) {
            var entities = _mapper.Map<IEnumerable<Product>>(products);
            await _repository.InsertMany(entities);
            return true;
        }

        public async Task<bool> Delete(string id) {
            return await _repository.Remove(id);
        }
        public async Task<IEnumerable<ProductDTO>> FindByVendor(string vendorId) {
            var listEntity = await _repository.FindByVendor(vendorId);
            return _mapper.Map<IEnumerable<ProductDTO>>(listEntity);
        }

        public async Task<IEnumerable<ProductDTO>> FindByCategory(string categoryId) {
            var listEntity = await _repository.FindByCategory(categoryId);
            return _mapper.Map<IEnumerable<ProductDTO>>(listEntity);
        }

        public async Task<IEnumerable<ProductDTO>> FindByFilter(string filter) {
            var listEntity = await _repository.FindByFilter(filter);
            return _mapper.Map<IEnumerable<ProductDTO>>(listEntity);
        }

        public async Task<IEnumerable<ProductDTO>> FindByPromotions() {
            var listEntity = await _repository.FindByPromotions();
            return _mapper.Map<IEnumerable<ProductDTO>>(listEntity);
        }
    }
}
