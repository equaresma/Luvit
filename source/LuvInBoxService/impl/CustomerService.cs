using com.luvinbox.model.registry;

namespace com.luvinbox.service.impl
{
    public class CustomerService : ServiceAbs<Customer, string>
    {
        public CustomerService(string uri) : base(uri)
        {

        }
    }
}
