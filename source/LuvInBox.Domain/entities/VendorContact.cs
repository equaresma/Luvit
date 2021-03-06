using com.luvinbox.domain.compose;

namespace com.luvinbox.domain.entities
{
    public class VendorContact : Person
    {
        public override DocumentAbs Document { get; set; }
        public override Address Address { get; set; }

        public VendorContact()
        {
            Document = new ContactDocument();
        }
    }
}
