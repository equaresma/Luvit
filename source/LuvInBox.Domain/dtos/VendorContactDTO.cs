using com.luvinbox.domain.compose;
using com.luvinbox.domain.Properties;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.domain.dtos
{
    public class VendorContactDTO : PersonDTO
    {
        public UserDTO User  { get; set; }

        [Display(Name = "lblDocumentNumber", ResourceType = typeof(AppRes))]
        public override DocumentAbs Document { get; set; }

        [Display(Name = "lblAddress", ResourceType = typeof(AppRes))]
        public override Address Address { get; set; }

        public VendorContactDTO()
        {
            User = new UserDTO();
            Document = new ContactDocument();
        }
    }
}
