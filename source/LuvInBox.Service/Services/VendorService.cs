using AutoMapper;
using com.luvinbox.domain.dtos;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.exceptions;
using com.luvinbox.domain.helper;
using com.luvinbox.domain.interfaces.repository;
using com.luvinbox.domain.services;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace com.luvinbox.service.services {
    public class VendorService : IVendorService {
        private IVendorRepository _repository;
        private IUserService _userService;
        private readonly IMapper _mapper;

        public VendorService(IVendorRepository repository, IUserService userService, IMapper mapper) {
            _repository = repository;
            _userService = userService;
            _mapper = mapper;
        }
        public async Task<bool> Delete(string id) {
            return await _repository.Remove(id);
        }
        public async Task<VendorDTO> Get(string id) {
            var entity = await _repository.Get(id);
            return _mapper.Map<VendorDTO>(entity) ?? new VendorDTO();
        }
        public async Task<IEnumerable<VendorDTO>> GetAll() {
            var listEntity = await _repository.Get();
            return _mapper.Map<IEnumerable<VendorDTO>>(listEntity);
        }
        public async Task<VendorDTO> Post(VendorDTO vendor) {
            if (await Validate(vendor) && await ResolveUser(vendor.User)) {
                var entity = _mapper.Map<Vendor>(vendor);
                var result = await _repository.Create(entity);

                return _mapper.Map<VendorDTO>(result);
            }

            return null;
        }
        public async Task<VendorDTO> Put(string id, VendorDTO vendor) {
            if (await Validate(vendor) && await ResolveUser(vendor.User)) {
                var entity = _mapper.Map<Vendor>(vendor);
                var result = await _repository.Update(id, entity);

                return _mapper.Map<VendorDTO>(result);
            }

            return null;
        }

        private async Task<bool> Validate(VendorDTO vendor) {
            if (!DocumentValidator.IsDocumentValid(vendor.DocumentNumber, vendor.DocumentType)) {
                throw new BusinessException("Invalid Document");
            }

            if (await _userService.Validate(vendor.User)) {
                if (vendor.FoundedIn > DateTime.UtcNow)
                    throw new BusinessException("Msg_Invalid_Foundation");
            }

            return true;
        }
        private async Task<bool> ResolveUser(UserDTO user) {
            var u = await _userService.Post(user);
            return u?.Id != null;
        }
    }
}
