using com.luvinbox.data.implement;
using com.luvinbox.data.repository;
using com.luvinbox.domain.interfaces.repository;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace com.luvinbox.infra.dependencyinjection {
    public class ConfigureRepository {
        public static void ConfigureDependenciesService(IServiceCollection serviceCollection, IConfiguration configuration) {
            serviceCollection.AddScoped(typeof(IRepository<>), typeof(BaseRepository<>));
            serviceCollection.AddScoped<ICustomerRepository, CustomerImplement>();
            serviceCollection.AddScoped<ILoginRepository, LoginImplement>();
            serviceCollection.AddScoped<IVendorRepository, VendorImplement>();
            serviceCollection.AddScoped<IUserRepository, UserImplement>();
            serviceCollection.AddScoped<IProductRepository, ProductImplement>();
            serviceCollection.AddScoped<ICategoryRepository, CategoryImplement>();
            serviceCollection.AddScoped<IOrderRepository, OrderImplement>();
            serviceCollection.AddScoped<ISizeRepository, SizeImplement>();
        }
    }
}
