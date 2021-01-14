using com.luvinbox.model.compose;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.model.registry
{
    public class Vendor : IEntity<string>
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredName", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Text)]
        [Display(Name = "lblName", ResourceType = typeof(AppRes))]
        public string Name { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredFantasyName", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Text)]
        [Display(Name = "lblFantasyName", ResourceType = typeof(AppRes))]
        public string FantasyName { get; set; }
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredDate", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Date)]
        [Display(Name = "lblFoundedIn", ResourceType = typeof(AppRes))]
        public DateTime FoundedIn { get; set; }
        public string LogoURL { get; set; }
        public string WebSite { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredEmail", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Text)]
        [RegularExpression(@"^([\w\-]+\.)*[\w\- ]+@([\w\- ]+\.)+([\w\-]{2,3})$", ErrorMessageResourceName = "InvalidEmail", ErrorMessageResourceType = typeof(AppRes))]
        [Display(Name = "lblEmail", ResourceType = typeof(AppRes))]
        public string Email { get; set; }
        public Address MainAddress { get; set; }
        public Address AlternativeAddress { get; set; }
        public PhoneNumber MainPhone { get; set; }
        public PhoneNumber Mobile { get; set; }
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
            MainPhone = new PhoneNumber();
            Mobile = new PhoneNumber();
        }
    }
}
