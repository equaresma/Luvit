using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using com.luvit.model;
using com.luvit.model.compose;
using MongoDB.Driver;
namespace LuvitRepository
{
    public interface ICustomerService : IService<Customer, string>
    {
    }

    public class CustomerService : ICustomerService
    {
        private readonly IMongoCollection<Customer> _Customers;

        public CustomerService(ILuvItDatabaseSettings settings)
        {
            settings.CollectionName = "Customer";
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _Customers = database.GetCollection<Customer>(settings.CollectionName);
        }
        public async Task<List<Customer>> Get()
        {
            var lst = await _Customers.FindAsync(Customer => true);
            return lst.ToList();
        }
        public async Task<Customer> Get(string id)
        {
            var p = await _Customers.FindAsync<Customer>(Customer => Customer.Id == id);
            return p.FirstOrDefault();
        }
        public async Task<Customer> Create(Customer Customer)
        {
            await _Customers.InsertOneAsync(Customer);
            return Customer;
        }
        public async Task Update(string id, Customer CustomerIn) =>
            await _Customers.ReplaceOneAsync(Customer => Customer.Id == id, CustomerIn);
        public async Task Remove(Customer CustomerIn) =>
            await _Customers.DeleteOneAsync(Customer => Customer.Id == CustomerIn.Id);
        public async Task Remove(string id) =>
            await _Customers.DeleteOneAsync(Customer => Customer.Id == id);
    }
}
