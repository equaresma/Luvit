using AutoMapper;
using com.luvinbox.domain.dtos;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.interfaces.repository;
using com.luvinbox.domain.services;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace com.luvinbox.service.services {
    public class SizeService : ISizeService {
        private ISizeRepository _repository;
        private readonly IMapper _mapper;

        public SizeService(ISizeRepository repository, IMapper mapper) {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<bool> Delete(string id) => await _repository.Remove(id);

        public async Task<SizeDTO> Get(string id) {
            var entity = await _repository.Get(id);
            return _mapper.Map<SizeDTO>(entity) ?? new SizeDTO();
        }
        public async Task<IEnumerable<SizeDTO>> GetAll() {
            var listEntity = await _repository.Get();
            return _mapper.Map<IEnumerable<SizeDTO>>(listEntity);
        }
        public async Task<SizeDTO> Post(SizeDTO Size) {
            var entity = _mapper.Map<Size>(Size);
            var result = await _repository.Create(entity);

            return _mapper.Map<SizeDTO>(result);
        }
        public async Task<SizeDTO> Put(string id, SizeDTO Size) {
            var entity = _mapper.Map<Size>(Size);
            var result = await _repository.Update(id, entity);

            return _mapper.Map<SizeDTO>(result);
        }

        public Task<bool> Validate(SizeDTO Size) => throw new NotImplementedException();
    }
}
