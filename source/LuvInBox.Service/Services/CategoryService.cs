using AutoMapper;
using com.luvinbox.domain.dtos;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.interfaces.repository;
using com.luvinbox.domain.services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace com.luvinbox.service.services {
    public class CategoryService : ICategoryService {
        private ICategoryRepository _repository;
        private readonly IMapper _mapper;

        public CategoryService(ICategoryRepository repository, IMapper mapper) {
            _repository = repository;
            _mapper = mapper;
        }
        public async Task<bool> Delete(string id) {
            return await _repository.Remove(id);
        }
        public async Task<CategoryDTO> Get(string id) {
            var entity = await _repository.Get(id);
            return _mapper.Map<CategoryDTO>(entity) ?? new CategoryDTO();
        }
        public async Task<IEnumerable<CategoryDTO>> GetAll() {
            var listEntity = await _repository.Get();
            return _mapper.Map<IEnumerable<CategoryDTO>>(listEntity);
        }
        public async Task<CategoryDTO> Post(CategoryDTO category) {
            var entity = _mapper.Map<Category>(category);
            var result = await _repository.Create(entity);

            return _mapper.Map<CategoryDTO>(result);

        }
        public async Task<CategoryDTO> Put(string id, CategoryDTO category) {
            var entity = _mapper.Map<Category>(category);
            var result = await _repository.Update(id, entity);

            return _mapper.Map<CategoryDTO>(result);
        }
    }
}
