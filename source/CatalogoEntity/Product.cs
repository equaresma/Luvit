using System;
using System.ComponentModel.DataAnnotations;
using com.luvit.model.compose;
using com.luvit.model.enums;
using MongoDB.Bson.Serialization.Attributes;

namespace com.luvit.model
{
    public class Product
    {
        [BsonId]
        public Int32 BarCode { get; set; }
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
