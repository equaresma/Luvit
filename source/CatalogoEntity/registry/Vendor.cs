using com.luvinbox.model.compose;
using com.luvinbox.model.Properties;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.model.registry
{
    [Serializable]
    public class Vendor : IEntity<string>
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredCompanyName", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Text)]
        [Display(Name = "lblCompanyName", ResourceType = typeof(AppRes))]
        public string Name { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredFantasyName", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Text)]
        [Display(Name = "lblFantasyName", ResourceType = typeof(AppRes))]
        public string FantasyName { get; set; }
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "Required", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Date)]
        [Display(Name = "lblFoundedIn", ResourceType = typeof(AppRes))]
        public DateTime FoundedIn { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredNumber", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Text)]
        [Display(Name = "lblDocumentNumber", ResourceType = typeof(AppRes))]
        public Document DocumentNumber { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredLogoSite", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.ImageUrl)]
        [Display(Name = "lblLogoURL", ResourceType = typeof(AppRes))]        
        public string LogoURL { get; set; }
        [DataType(DataType.Url)]
        public string WebSite { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredEmail", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.EmailAddress)]
        [RegularExpression(@"^([\w\-]+\.)*[\w\- ]+@([\w\- ]+\.)+([\w\-]{2,3})$", ErrorMessageResourceName = "InvalidEmail", ErrorMessageResourceType = typeof(AppRes))]
        [Display(Name = "lblEmail", ResourceType = typeof(AppRes))]
        public string Email { get; set; }
        [Display(Name = "lblMainAddress", ResourceType = typeof(AppRes))]
        public Address MainAddress { get; set; }
        [Display(Name = "lblAlternativeAddress", ResourceType = typeof(AppRes))]
        public Address AlternativeAddress { get; set; }
        [Display(Name = "lblPhoneNumber", ResourceType = typeof(AppRes))]
        [DataType(DataType.PhoneNumber)]
        public String MainPhone { get; set; }
        [Display(Name = "lblMobileNumber", ResourceType = typeof(AppRes))]
        [DataType(DataType.PhoneNumber)]
        public String Mobile { get; set; }
        [Display(Name = "lblHasPhysicalStore", ResourceType = typeof(AppRes))]
        public Boolean HasPhysicalStore { get; set; }
        [Display(Name = "lblCommercialContact", ResourceType = typeof(AppRes))]
        public VendorContact Contact { get; set; }
        [Display(Name = "lblBankInfo", ResourceType = typeof(AppRes))]
        public BankInformation BankInfo { get; set; }
        public DateTime Created { get; set; }
        public string Creator { get; set; }
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime LastUpdate { get; set; }
        public string UserLastUpdate { get; set; }

        public Vendor()
        {
            Created = DateTime.UtcNow;
            MainAddress = new Address();
            AlternativeAddress = new Address();
        }

        public override int GetHashCode()
        {
            return this.Id.GetHashCode();
        }
        public override bool Equals(object obj)
        {
            Vendor p = obj as Vendor;
            if (p == null)
                return false;

            return this.Id == p.Id;
        }
        public override String ToString()
        {
            return String.Format($"{DocumentNumber.Number} - {Name}");
        }
    }
}
