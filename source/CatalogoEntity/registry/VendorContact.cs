using com.luvinbox.model.system;

namespace com.luvinbox.model.registry
{
    public class VendorContact : Person
    {
        public Login Login { get; set; }

        public VendorContact()
        {
            Login = new Login();
        }
    }
}
