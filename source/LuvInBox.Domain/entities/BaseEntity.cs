using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace com.luvinbox.domain.entities
{
    public abstract class BaseEntity
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public DateTime CreateAt { get; set; }
        public DateTime LastUpdate { get; set; }

        public BaseEntity()
        {
            CreateAt = DateTime.UtcNow;
            LastUpdate = DateTime.UtcNow;
        }

        public override int GetHashCode()
        {
            return Id.GetHashCode();
        }

        public override bool Equals(object obj)
        {
            var o = obj as BaseEntity;
            
            if (o == null)
                return false;

            return Id.Equals(o.Id);
        }
    }
}
