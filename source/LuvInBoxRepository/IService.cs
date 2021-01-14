using System.Collections.Generic;
using System.Threading.Tasks;
using com.luvinbox.model;

namespace com.luvinbox.repository
{
    public interface IService<T, K>
        where T : IEntity<K>
    {
        Task<T> Create(T instance);
        Task<List<T>> Get();
        Task<T> Get(K id);
        Task Remove(K id);
        Task Remove(T instance);
        Task Update(K id, T instance);
    }
}