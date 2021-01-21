using com.luvinbox.model.compose;
using com.luvinbox.model.Properties;
using com.luvinbox.model.system;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.model.registry
{
    public class VendorContact : Person
    {
        public Login Login { get; set; }

        [Display(Name = "lblDocumentNumber", ResourceType = typeof(AppRes))]
        public override IDocument Document { get; set; }

        [Display(Name = "lblAddress", ResourceType = typeof(AppRes))]
        public override Address Address { get; set; }

        public VendorContact()
        {
            Login = new Login();
            Document = new ContactDocument();
        }
    }
}
