using System;
using com.luvinbox.model.compose;
using com.luvinbox.model.enums;
using MongoDB.Bson.Serialization.Attributes;

namespace com.luvinbox.model
{
    public class Product : IEntity<Int32>
    {
        /// <summary>
        /// BarCode
        /// </summary>
        [BsonId]
        public Int32 Id { get; set; }
        public string VendorId { get; set; }
        public String Name { get; set; }
        public String Description { get; set; }        
        public String ImageURL { get; set; }
        public enumProductCategory? Category { get; set; }
        public Dimensions Dimension { get; set; }
        public Decimal Price { get; set; }
        public float? Off { get; set; }
        [BsonIgnore]
        public Decimal OffPrice { 
            get {
                decimal discount = Convert.ToDecimal(Off ?? 0);
                return Price - (Price * discount/100);
            } 
        }
    }
}
