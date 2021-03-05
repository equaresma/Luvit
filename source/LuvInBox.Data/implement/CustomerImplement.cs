using com.luvinbox.data.repository;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.repository.interfaces;
using com.luvinbox.domain.repository.interfaces.repository;

namespace com.luvinbox.data.implement
{
    public class CustomerImplement : BaseRepository<Customer>, ICustomerRepository
    {
        public CustomerImplement(IRepositorySettings settings) : base(settings)
        {
        }
    }
}
