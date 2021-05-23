using com.luvinbox.domain.compose;
using com.luvinbox.domain.enums;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace com.luvinbox.domain.entities {
    [Serializable]
    public class Vendor : BaseEntity {
        public string Name { get; set; }
        public string FantasyName { get; set; }
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime FoundedIn { get; set; }
        public enumDocumentType DocumentType { get; set; }
        public string DocumentNumber { get; set; }
        public string WebSite { get; set; }
        public string Email { get; set; }
        public Address MainAddress { get; set; }
        public Address AlternativeAddress { get; set; }
        public String MainPhone { get; set; }
        public String Mobile { get; set; }
        public Boolean HasPhysicalStore { get; set; }
        public VendorContact Contact { get; set; }
        public BankInformation BankInfo { get; set; }
        public Image LogoType { get; set; }

        public Vendor() {
            MainAddress = new Address();
        }
    }
}
