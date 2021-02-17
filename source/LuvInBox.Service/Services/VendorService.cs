using AutoMapper;
using com.luvinbox.domain.dtos;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.repository.interfaces;
using com.luvinbox.domain.services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LuvInBox.Service.Services
{
    public class VendorService : IVendorService
    {
        private IRepository<Vendor> _repository;
        private readonly IMapper _mapper;

        public VendorService(IRepository<Vendor> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task Delete(string id)
        {
            await _repository.Remove(id);
        }

        public async Task<VendorDTO> Get(string id)
        {
            var entity = await _repository.Get(id);
            return _mapper.Map<VendorDTO>(entity) ?? new VendorDTO();
        }

        public async Task<IEnumerable<VendorDTO>> GetAll()
        {
            var listEntity = await _repository.Get();
            return _mapper.Map<IEnumerable<VendorDTO>>(listEntity);
        }

        public async Task<VendorDTO> Post(VendorDTO user)
        {
            var entity = _mapper.Map<Vendor>(user);
            var result = await _repository.Create(entity);

            return _mapper.Map<VendorDTO>(result);
        }

        public async Task<VendorDTO> Put(string id, VendorDTO user)
        {
            var entity = _mapper.Map<Vendor>(user);
            var result = await _repository.Update(id, entity);

            return _mapper.Map<VendorDTO>(result);
        }
    }
}
