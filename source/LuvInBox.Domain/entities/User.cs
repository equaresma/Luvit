using com.luvinbox.domain.enums;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace com.luvinbox.domain.entities
{
    public class User : BaseEntity
    {
        public string Name { get; set; }
        public string Password
        {
            get; set;
        }
        public Guid Salt { get; set; }

        public enumUserType Type
        {
            get; set;
        }

        public User() {
        }
    }
}
