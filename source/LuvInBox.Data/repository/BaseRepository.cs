using com.luvinbox.domain.entities;
using com.luvinbox.domain.interfaces.repository;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace com.luvinbox.data.repository {
    public class BaseRepository<T> : IRepository<T> where T : BaseEntity {
        private readonly string _cnnString;
        private readonly string _dbName;
        private readonly string _colName;
        private readonly IMongoCollection<T> _collection;

        public BaseRepository(IRepositorySettings settings) {
            _cnnString = settings.ConnectionString;
            _dbName = settings.DatabaseName;
            _colName = typeof(T).Name;

            var client = new MongoClient(_cnnString);
            var database = client.GetDatabase(_dbName);

            _collection = database.GetCollection<T>(_colName);
        }

        public async Task<IEnumerable<T>> Get() {
            var lst = await _collection.FindAsync(T => true);
            return lst.ToEnumerable();
        }
        public async Task<T> Get(string id) {
            var p = await _collection.FindAsync<T>(x => x.Id.Equals(id));
            return p.FirstOrDefault();
        }
        public async Task<IEnumerable<T>> Find(Expression<Func<T, bool>> filter) {
            var list = await _collection.FindAsync<T>(filter);
            return list.ToEnumerable();
        }
        public async Task<T> Create(T instance) {
            await _collection.InsertOneAsync(instance);
            return instance;
        }
        public async Task<T> Update(string id, T instance) {
            await _collection.ReplaceOneAsync(x => x.Id.Equals(id), instance);
            return instance;
        }
        public async Task<bool> Remove(T instance) {
            var res = await _collection.DeleteOneAsync(x => x.Id.Equals(instance.Id));
            return res?.DeletedCount > 0;
        }
        public async Task<bool> Remove(string id) {
            var res = await _collection.DeleteOneAsync(x => x.Id.Equals(id));
            return res?.DeletedCount > 0;
        }
        public async Task InsertMany(IEnumerable<T> instances) {
            await _collection.InsertManyAsync(instances);
        }
    }
}
