using AutoMapper;
using com.luvinbox.domain.dtos;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.repository.interfaces;
using com.luvinbox.domain.services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LuvInBox.Service.Services
{
    public class UserService : IUserService
    {
        private IRepository<User> _repository;
        private readonly IMapper _mapper;

        public UserService(IRepository<User> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task Delete(string id)
        {
            await _repository.Remove(id);
        }
        public async Task<UserDTO> Get(string id)
        {
            var entity = await _repository.Get(id);
            return _mapper.Map<UserDTO>(entity) ?? new UserDTO();
        }
        public async Task<IEnumerable<UserDTO>> GetAll()
        {
            var listEntity = await _repository.Get();
            return _mapper.Map<IEnumerable<UserDTO>>(listEntity);
        }
        public async Task<UserDTO> Post(UserDTO user)
        {
            var entity = _mapper.Map<User>(user);
            var result = await _repository.Create(entity);

            return _mapper.Map<UserDTO>(result);
        }
        public async Task<UserDTO> Put(string id, UserDTO user)
        {
            var entity = _mapper.Map<User>(user);
            var result = await _repository.Update(id, entity);

            return _mapper.Map<UserDTO>(result);
        }
    }
}
