using AutoMapper;
using com.luvinbox.domain.dtos;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.interfaces.repository;
using com.luvinbox.domain.services;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Concurrent;
using Dasync.Collections;

namespace com.luvinbox.service.services {
    public class ProductService : IProductService {
        private readonly IProductRepository _repository;
        private readonly IVendorRepository _vendorRepository;
        private readonly IMapper _mapper;

        public ProductService(IProductRepository repository, IVendorRepository vendorRepository, IMapper mapper) {
            _repository = repository;
            _vendorRepository = vendorRepository;
            _mapper = mapper;
        }

        public async Task<ProductDTO> Get(string id) {
            var entity = await _repository.Get(id);
            return await FillVendorInfo(entity);
        }
        public async Task<IEnumerable<ProductDTO>> GetAll() {
            var listEntity = await _repository.Get();
            return await FillVendorInfo(listEntity);
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
            return await FillVendorInfo(listEntity);
        }

        public async Task<IEnumerable<ProductDTO>> FindByCategory(string categoryId) {
            var listEntity = await _repository.FindByCategory(categoryId);
            return await FillVendorInfo(listEntity);
        }

        public async Task<IEnumerable<ProductDTO>> FindByFilter(string filter) {
            var listEntity = await _repository.FindByFilter(filter);
            return await FillVendorInfo(listEntity);
        }

        public async Task<IEnumerable<ProductDTO>> FindByPromotions() {
            var listEntity = await _repository.FindByPromotions();
            return await FillVendorInfo(listEntity);
        }

        private async Task<IEnumerable<ProductDTO>> FillVendorInfo(IEnumerable<Product> products) {
            var vendors = await _vendorRepository.Get();
            var returnedList = new ConcurrentBag<ProductDTO>();
            
            Parallel.ForEach(vendors.ToList(), vendor => {
                var vendorPrds = products.Where(p => p.VendorId == vendor.Id).ToList();

                Parallel.ForEach(vendorPrds, product => {
                    var dto = _mapper.Map<ProductDTO>(product);
                    dto.VendorName = vendor.Name;
                    dto.VendorZipCode = vendor.MainAddress.ZipCode;
                    dto.VendorDocNumber = vendor.Document.Number;

                    returnedList.Add(dto);
                });
            });

            return returnedList;
        }

        private async Task<ProductDTO> FillVendorInfo(Product product) {
            var vendor = await _vendorRepository.Get(product.VendorId);
            var dto = _mapper.Map<ProductDTO>(product);

            if (vendor !=null) {
                dto.VendorName = vendor.Name;
                dto.VendorZipCode = vendor.MainAddress.ZipCode;
                dto.VendorDocNumber = vendor.Document.Number;
            }

            return dto;
        }
    }
}
