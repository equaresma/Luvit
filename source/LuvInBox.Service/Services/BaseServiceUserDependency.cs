using AutoMapper;
using com.luvinbox.domain.dtos;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.interfaces.repository;
using System.ComponentModel.DataAnnotations;

namespace LuvInBox.Service.Services {
    public abstract class BaseServiceUserDependency<Dto, Entity> where Dto : BaseDTO where Entity : BaseEntity {

        private readonly IUserRepository _repository;
        private readonly IMapper _mapper;
        public BaseServiceUserDependency(IUserRepository repository, IMapper mapper) {
            _repository = repository;
            _mapper = mapper;
        }

        protected bool CreateUser(Dto dto) {

            return true;
        }

        protected bool UpdateUser(Dto dto) {

            return true;
        }

        protected bool Validate(CustomerDTO customer) {
            var currentUser = _repository.FindByLogin(customer.Email);

            if (currentUser != null)
                throw new ValidationException($"{customer.Email} already exists");

            return true;
        }
    }
}
