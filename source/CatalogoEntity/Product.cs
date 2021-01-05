using System;
using MongoDB.Bson.Serialization.Attributes;

namespace com.luvit.model
{
    public enum ProductCategoryEnum : Int16
    {
        pdA = 0,
        pdB = 1,
        pdC = 3,
    }
    public class Product
    {
        [BsonId]
        public Int32 BarCode { get; set; }
        public String Name { get; set; }
        public String Description { get; set; }
        public Decimal Price { get; set; }
        public Int32 StockQuantity { get; set; }
        public String ImageURL { get; set; }
        public String VendorId { get; set; }
        public ProductCategoryEnum? Category { get; set; }
    }
}
