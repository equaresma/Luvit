using System;
using System.ComponentModel.DataAnnotations;
using com.luvinbox.model.compose;
using com.luvinbox.model.enums;
using MongoDB.Bson.Serialization.Attributes;

namespace com.luvinbox.model.registry
{
    public class Product : IEntity<Int32>
    {
        /// <summary>
        /// BarCode
        /// </summary>
        [BsonId]
        public Int32 Id { get; set; }
        public string VendorId { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredName", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Text)]
        [Display(Name = "lblName", ResourceType = typeof(AppRes))]
        public String Name { get; set; }
        [DataType(DataType.Text)]
        [Display(Name = "lblDescription", ResourceType = typeof(AppRes))]
        public String Description { get; set; }
        [Display(Name = "lblImageURL", ResourceType = typeof(AppRes))]
        public String ImageURL { get; set; }
        [Display(Name = "lblCategory", ResourceType = typeof(AppRes))]
        public enumProductCategory? Category { get; set; }
        public Dimensions Dimension { get; set; }
        [Display(Name = "lblPrice", ResourceType = typeof(AppRes))]
        public Decimal Price { get; set; }
        [Display(Name = "lblOff", ResourceType = typeof(AppRes))]
        public float? Off { get; set; }
        [BsonIgnore]
        [Display(Name = "lblOffPrice", ResourceType = typeof(AppRes))]
        public Decimal OffPrice { 
            get {
                decimal discount = Convert.ToDecimal(Off ?? 0);
                return Price - (Price * discount/100);
            } 
        }
        public DateTime Created { get; set; }
        public string Creator { get; set; }
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime LastUpdate { get; set; }
        public string UserLastUpdate { get; set; }

        public Product()
        {
            Created = DateTime.UtcNow;
        }

        public override int GetHashCode()
        {
            return this.Id.GetHashCode();
        }
        public override bool Equals(object obj)
        {
            Product p = obj as Product;
            
            if (p == null)
                return false;

            return this.Id == p.Id;
        }
        public override String ToString()
        {
            return String.Format($"{Id} - {Name} - {Description}");
        }

    }
}
