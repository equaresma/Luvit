using System.Collections.Generic;
using System.Threading.Tasks;
using com.luvinbox.model;
using com.luvinbox.model.compose;
using MongoDB.Driver;

namespace com.luvinbox.repository
{
    public abstract class ServiceAbs<T, K> : IService<T,K>
        where T : IEntity<K>
    {
        private readonly IMongoCollection<T> _collection;

        public ServiceAbs(ILuvItDatabaseSettings settings)
        {
            settings.CollectionName = typeof(T).Name;
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _collection = database.GetCollection<T>(settings.CollectionName);
        }
        public async Task<List<T>> Get()
        {
            var lst = await _collection.FindAsync(T => true);
            return lst.ToList();
        }
        public async Task<T> Get(K id)
        {
            var p = await _collection.FindAsync<T>(x => x.Id.Equals(id));
            return p.FirstOrDefault();
        }
        public async Task<T> Create(T T)
        {
            await _collection.InsertOneAsync(T);
            return T;
        }
        public async Task Update(K id, T VendorIn) =>
            await _collection.ReplaceOneAsync(x => x.Id.Equals(id), VendorIn);
        public async Task Remove(T VendorIn) =>
            await _collection.DeleteOneAsync(x => x.Id.Equals(VendorIn.Id));
        public async Task Remove(K id) =>
            await _collection.DeleteOneAsync(x => x.Id.Equals(id));
    }
}