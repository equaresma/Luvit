using com.luvinbox.domain.services;
using LuvInBox.Service.Services;
using Microsoft.Extensions.DependencyInjection;

namespace com.luvinbox.infra.dependencyinjection
{
    public static class ConfigureService
    {
        public static void ConfigureDependenciesService(IServiceCollection serviceCollection)
        {
            serviceCollection.AddTransient<IUserService, UserService>();
           // serviceCollection.AddTransient<ILoginService, LoginService>();
        }
    }
}
