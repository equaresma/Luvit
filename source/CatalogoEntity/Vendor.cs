using System.Collections.Generic;
using com.luvit.model.compose;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace com.luvit.model
{
    public class Vendor
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }        
        public string LogoURL { get; set; }
        public string WebSite { get; set; }
        public string Email { get; set; }

        public List<Address> Address { get; set; }
        public List<Phone> Phones { get; set; }

        public Vendor()
        {
            Address = new List<Address>(10);
            Phones = new List<Phone>(10);
        }
    }
}
