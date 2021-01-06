using com.luvit.model;
using com.luvit.model.compose;
using MongoDB.Driver;
namespace com.luvit.repository.impl
{
    public class CustomerService : ServiceAbs<Customer, string>
    {
        private readonly IMongoCollection<Customer> _Customers;

        public CustomerService(ILuvItDatabaseSettings settings) : base(settings)
        {
            settings.CollectionName = "Customer";
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _Customers = database.GetCollection<Customer>(settings.CollectionName);
        }
    }
}
