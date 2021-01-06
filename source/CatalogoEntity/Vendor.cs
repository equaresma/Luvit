using System.Collections.Generic;
using com.luvit.model.compose;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace com.luvit.model
{
    public class Vendor : IEntity<string>
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }        
        public string LogoURL { get; set; }
        public string WebSite { get; set; }
        public string Email { get; set; }
        public Address MainAddress { get; set; }
        public Address AlternativeAddress { get; set; }
        public Phone MainPhone { get; set; }
        public Phone Mobile { get; set; }

        public Vendor()
        {
            
        }
    }
}
