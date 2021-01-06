using com.luvit.model;
using com.luvit.model.compose;
using MongoDB.Driver;
namespace com.luvit.repository.impl
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
