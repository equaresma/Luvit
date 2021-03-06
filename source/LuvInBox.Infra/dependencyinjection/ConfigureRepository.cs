using com.luvinbox.data.implement;
using com.luvinbox.data.repository;
using com.luvinbox.domain.repository.interfaces;
using com.luvinbox.domain.repository.interfaces.repository;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace com.luvinbox.infra.dependencyinjection {
    public class ConfigureRepository {
        public static void ConfigureDependenciesService(IServiceCollection serviceCollection, IConfiguration configuration) {
            serviceCollection.AddScoped(typeof(IRepository<>), typeof(BaseRepository<>));
            serviceCollection.AddScoped<ICustomerRepository, CustomerImplement>();
            serviceCollection.AddScoped<ILoginRepository, LoginImplement>();
            serviceCollection.AddScoped<IUserRepository, UserImplement>();
        }
    }
}
