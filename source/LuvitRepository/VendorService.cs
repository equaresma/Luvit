using System.Collections.Generic;
using System.Threading.Tasks;
using com.luvit.model;
using com.luvit.model.compose;
using MongoDB.Driver;
namespace LuvitRepository
{
    public interface IVendorService : IService<Vendor, string>
    {
    }

    public class VendorService : IVendorService
    {
        private readonly IMongoCollection<Vendor> _Vendors;

        public VendorService(ILuvItDatabaseSettings settings)
        {
            settings.CollectionName = "Vendor";
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _Vendors = database.GetCollection<Vendor>(settings.CollectionName);
        }
        public async Task<List<Vendor>> Get()
        {
            var lst = await _Vendors.FindAsync(Vendor => true);
            return lst.ToList();
        }
        public async Task<Vendor> Get(string id)
        {
            var p = await _Vendors.FindAsync<Vendor>(Vendor => Vendor.Id == id);
            return p.FirstOrDefault();
        }
        public async Task<Vendor> Create(Vendor Vendor)
        {
            await _Vendors.InsertOneAsync(Vendor);
            return Vendor;
        }
        public async Task Update(string id, Vendor VendorIn) =>
            await _Vendors.ReplaceOneAsync(Vendor => Vendor.Id == id, VendorIn);
        public async Task Remove(Vendor VendorIn) =>
            await _Vendors.DeleteOneAsync(Vendor => Vendor.Id == VendorIn.Id);
        public async Task Remove(string id) =>
            await _Vendors.DeleteOneAsync(Vendor => Vendor.Id == id);
    }
}
