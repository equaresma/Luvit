using com.luvinbox.domain.services;
using com.luvinbox.service.services;
using Microsoft.Extensions.DependencyInjection;

namespace com.luvinbox.infra.dependencyinjection {
    public static class ConfigureService {
        public static void ConfigureDependenciesService(IServiceCollection serviceCollection) {
            serviceCollection.AddTransient<ICustomerService, CustomerService>();
            serviceCollection.AddTransient<IUserService, UserService>();
            serviceCollection.AddTransient<ILoginService, LoginService>();
            serviceCollection.AddTransient<IVendorService, VendorService>();
            serviceCollection.AddTransient<IProductService, ProductService>();
            serviceCollection.AddTransient<ICategoryService, CategoryService>();
            serviceCollection.AddTransient<IPaymentService, PaymentService>();
            serviceCollection.AddTransient<IShippingService, ShippingService>();
        }
    }
}
