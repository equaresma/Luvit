using System;
using System.Collections.Generic;
using com.luvit.model.compose;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace com.luvit.model
{
    public class Customer
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; } 
        public DateTime? Birth { get; set; }
        public string Email { get; set; }
        public Document Doc { get; set; }
        public List<Address> Address { get; set; }
        public List<Phone> Phones { get; set; }

        public Customer()
        {
            Address = new List<Address>(2);
            Phones = new List<Phone>(2);
        }
    }
}
