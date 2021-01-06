using System;
using System.Collections.Generic;
using com.luvit.model.compose;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace com.luvit.model
{
    public class Customer : IEntity<string>
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; } 
        public DateTime? Birth { get; set; }
        public string Email { get; set; }
        public Document Doc { get; set; }
        public Address Address { get; set; }
        public Address AlternativeAddress { get; set; }
        public Phone Phone { get; set; }
        public Phone Mobile { get; set; }

        public Customer()
        {
            
        }
    }
}
