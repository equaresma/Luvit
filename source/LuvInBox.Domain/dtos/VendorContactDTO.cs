using com.luvinbox.domain.compose;
using com.luvinbox.domain.Properties;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.domain.dtos {
    public class VendorContactDTO : PersonDTO {
        [Display(Name = "lblAddress", ResourceType = typeof(AppRes))]
        public override Address Address { get; set; }

        public VendorContactDTO() {
        }
    }
}
