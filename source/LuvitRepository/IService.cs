using System.Collections.Generic;
using System.Threading.Tasks;

namespace LuvitRepository
{
    public interface IService<T, K> where T : class where K : struct
    {
        Task<T> Create(T instance);
        Task<List<T>> Get();
        Task<T> Get(K id);
        Task Remove(K id);
        Task Remove(T instance);
        Task Update(K id, T instance);
    }
}