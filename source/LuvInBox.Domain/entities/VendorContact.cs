using com.luvinbox.domain.compose;

namespace com.luvinbox.domain.entities
{
    public class VendorContact : Person
    {
        public Login Login { get; set; }
        public override IDocument Document { get; set; }
        public override Address Address { get; set; }

        public VendorContact()
        {
            Login = new Login();
            Document = new ContactDocument();
        }
    }
}
