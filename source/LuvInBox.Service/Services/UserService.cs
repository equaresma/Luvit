using AutoMapper;
using com.luvinbox.domain.dtos;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.exceptions;
using com.luvinbox.domain.helper;
using com.luvinbox.domain.interfaces.repository;
using com.luvinbox.domain.security;
using com.luvinbox.domain.services;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LuvInBox.Service.Services {
    public class UserService : IUserService {
        private IUserRepository _repository;
        private readonly IMapper _mapper;

        public UserService(IUserRepository repository, IMapper mapper) {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task Delete(string id) {
            await _repository.Remove(id);
        }
        public async Task<UserDTO> Get(string id) {
            var entity = await _repository.Get(id);
            return _mapper.Map<UserDTO>(entity) ?? new UserDTO();
        }
        public async Task<IEnumerable<UserDTO>> GetAll() {
            var listEntity = await _repository.Get();
            return _mapper.Map<IEnumerable<UserDTO>>(listEntity);
        }
        public async Task<UserDTO> Post(UserDTO user) {
            var entity = _mapper.Map<User>(user);
            Encrypt(entity);
            var result = await _repository.Create(entity);

            return _mapper.Map<UserDTO>(result);
        }
        public async Task<UserDTO> Put(string id, UserDTO user) {
            var entity = _mapper.Map<User>(user);

            if (user.IsPasswordChange)
                Encrypt(entity);

            var result = await _repository.Update(id, entity);

            return _mapper.Map<UserDTO>(result);
        }

        public async Task<bool> Validate(UserDTO user) {
            var currentUser = await _repository.FindByLogin(user.Name);

            if (currentUser != null)
                throw new BusinessException("Msg_Usr_Already_Exists");

            if (!PasswordValidation.IsValid(user.Password))
                throw new BusinessException("Msg_Invalid_Pwd");

            return true;
        }

        internal void Encrypt(User user) {
            user.Salt = Guid.NewGuid();
            user.Password = RijndaelManagedEncryption.EncryptRijndael(user.Password, user.Salt.ToString());
        }

        internal void Decrypt(User user) {
            user.Password = RijndaelManagedEncryption.DecryptRijndael(user.Password, user.Salt.ToString());
        }
    }
}
