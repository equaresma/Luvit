using com.luvinbox.domain.compose;
using com.luvinbox.domain.enums;
using com.luvinbox.domain.helper;
using com.luvinbox.domain.Properties;
using System;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.domain.dtos {
    [Serializable]
    public class VendorDTO : BaseDTO {
        [MaxLength(150)]
        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredCompanyName", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Text)]
        [Display(Name = "lblCompanyName", ResourceType = typeof(AppRes))]
        public string Name { get; set; }

        [MaxLength(120)]
        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredFantasyName", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Text)]
        [Display(Name = "lblFantasyName", ResourceType = typeof(AppRes))]
        public string FantasyName { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "Required", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Date)]
        [Display(Name = "lblFoundedIn", ResourceType = typeof(AppRes))]
        public DateTime FoundedIn { get; set; }

        public enumDocumentType DocumentType { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredNumber", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Text)]
        [Display(Name = "lblDocumentNumber", ResourceType = typeof(AppRes))]
        public string DocumentNumber { get; set; }

        [MaxLength(300)]
        [DataType(DataType.Url)]
        public string WebSite { get; set; }

        [MaxLength(150)]
        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredEmail", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.EmailAddress)]
        [RegularExpression(@"^([\w\-]+\.)*[\w\- ]+@([\w\- ]+\.)+([\w\-]{2,3})$", ErrorMessageResourceName = "InvalidEmail", ErrorMessageResourceType = typeof(AppRes))]
        [Display(Name = "lblEmail", ResourceType = typeof(AppRes))]
        public string Email { get; set; }

        [Required]
        [Display(Name = "lblMainAddress", ResourceType = typeof(AppRes))]
        public Address MainAddress { get; set; }

        [MaxLength(20)]
        [Display(Name = "lblPhoneNumber", ResourceType = typeof(AppRes))]
        [DataType(DataType.PhoneNumber)]
        public String MainPhone { get; set; }

        [MaxLength(20)]
        [Display(Name = "lblMobileNumber", ResourceType = typeof(AppRes))]
        [DataType(DataType.PhoneNumber)]
        public String Mobile { get; set; }

        [Display(Name = "lblHasPhysicalStore", ResourceType = typeof(AppRes))]
        public Boolean HasPhysicalStore { get; set; }

        [Display(Name = "lblCommercialContact", ResourceType = typeof(AppRes))]
        public VendorContactDTO Contact { get; set; }

        [Display(Name = "lblBankInfo", ResourceType = typeof(AppRes))]
        public BankInformation BankInfo { get; set; }

        public UserDTO User { get; set; }

        public Image LogoType { get; set; }

        public VendorDTO() {
            MainAddress = new Address();
        }

        public override String ToString() {
            return String.Format($"{DocumentNumber} - {Name}");
        }
    }
}
