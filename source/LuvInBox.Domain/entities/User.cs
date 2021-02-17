using com.luvinbox.domain.enums;
using MongoDB.Bson.Serialization.Attributes;

namespace com.luvinbox.domain.entities
{
    public class User : BaseEntity
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password
        {
            get; set;
        }
        public enumUserType Type
        {
            get; set;
        }
    }
}
