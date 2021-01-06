using System.Collections.Generic;
using System.Threading.Tasks;
using com.luvit.model;

namespace com.luvit.service
{
    public interface IService<TEntity, KId> where TEntity : IEntity<KId>
    {
        Task<IEnumerable<TEntity>> Get();
        Task<TEntity> Get(KId id);
        Task<bool> Save(TEntity instance);
        Task<bool> Delete(KId id);
    }
}
