using AutoMapper;
using com.luvinbox.domain.dtos;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.interfaces.repository;
using com.luvinbox.domain.services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace com.luvinbox.service.services {
    public class ProductStockService : IProductStockService {
        private readonly IProductStockRepository _repository;
        private readonly IVendorRepository _vendorRepository;
        private readonly IMapper _mapper;

        public ProductStockService(IProductStockRepository repository, IVendorRepository vendorRepository, IMapper mapper) {
            _repository = repository;
            _vendorRepository = vendorRepository;
            _mapper = mapper;
        }
        public async Task<ProductStockDTO> Get(string id) {
            var entity = await _repository.Get(id);
            return _mapper.Map<ProductStockDTO>(entity);
        }
        public async Task<ProductStockDTO> Post(ProductStockDTO ProductStock) {
            var entity = _mapper.Map<ProductStock>(ProductStock);
            var result = await _repository.Create(entity);

            return _mapper.Map<ProductStockDTO>(result);
        }
        public async Task<ProductStockDTO> Put(string id, ProductStockDTO ProductStock) {
            var entity = _mapper.Map<ProductStock>(ProductStock);
            var result = await _repository.Update(id, entity);

            return _mapper.Map<ProductStockDTO>(result);
        }
        public async Task<bool> Delete(string id) {
            return await _repository.Remove(id);
        }
        public async Task<IEnumerable<ProductStockDTO>> FindByVendor(string vendorId) {
            var listEntity = await _repository.FindByVendor(vendorId);
            return _mapper.Map<IEnumerable<ProductStockDTO>>(listEntity);
        }
    }
}
