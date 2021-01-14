using com.luvinbox.model.compose;
using com.luvinbox.model.registry;
using MongoDB.Driver;
namespace com.luvinbox.repository.impl
{
    public class VendorService : ServiceAbs<Vendor, string>
    {
        private readonly IMongoCollection<Vendor> _Vendors;

        public VendorService(ILuvItDatabaseSettings settings) : base(settings)
        {
            settings.CollectionName = "Vendor";
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _Vendors = database.GetCollection<Vendor>(settings.CollectionName);
        }
    }
}
