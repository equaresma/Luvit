using com.luvinbox.model.compose;
using com.luvinbox.model.registry;
using MongoDB.Driver;
namespace com.luvinbox.repository.impl
{
    public class ProductService : ServiceAbs<Product, int>
    {
        private readonly IMongoCollection<Product> _Products;

        public ProductService(ILuvItDatabaseSettings settings) : base(settings)
        {
            settings.CollectionName = "Product";
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            //client.Settings.SslSettings = new SslSettings() { EnabledSslProtocols = SslProtocols.Tls12 };
            _Products = database.GetCollection<Product>(settings.CollectionName);
        }
    }
}
