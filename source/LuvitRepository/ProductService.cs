using System.Collections.Generic;
using System.Threading.Tasks;
using com.luvit.model;
using com.luvit.model.compose;
using MongoDB.Driver;
namespace LuvitRepository
{
    public interface IProductService : IService<Product, int>
    {
    }

    public class ProductService : IProductService
    {
        private readonly IMongoCollection<Product> _Products;

        public ProductService(ILuvItDatabaseSettings settings)
        {
            settings.CollectionName = "Product";
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            //client.Settings.SslSettings = new SslSettings() { EnabledSslProtocols = SslProtocols.Tls12 };
            _Products = database.GetCollection<Product>(settings.CollectionName);
        }
        public async Task<List<Product>> Get()
        {
            var lst = await _Products.FindAsync(Product => true);
            return lst.ToList();
        }
        public async Task<Product> Get(int barcode)
        {
            var p = await _Products.FindAsync<Product>(Product => Product.BarCode == barcode);
            return p.FirstOrDefault();
        }
        public async Task<Product> Create(Product Product)
        {
            await _Products.InsertOneAsync(Product);
            return Product;
        }
        public async Task Update(int barcode, Product ProductIn) =>
            await _Products.ReplaceOneAsync(Product => Product.BarCode == barcode, ProductIn);
        public async Task Remove(Product ProductIn) =>
            await _Products.DeleteOneAsync(Product => Product.BarCode == ProductIn.BarCode);
        public async Task Remove(int barcode) =>
            await _Products.DeleteOneAsync(Product => Product.BarCode == barcode);
    }
}
