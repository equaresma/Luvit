using com.luvinbox.domain.entities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace com.luvinbox.domain.interfaces.repository {
    public interface IRepository<T> where T : BaseEntity {
        Task<T> Create(T instance);
        Task<IEnumerable<T>> Get();
        Task<IEnumerable<T>> Find(Expression<Func<T, bool>> filter);
        Task<T> Get(string id);
        Task<bool> Remove(string id);
        Task<T> Update(string id, T instance);
    }
}
