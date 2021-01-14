﻿using System;
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
        public DateTime Created { get; set; }
        public string Creator { get; set; }
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime LastUpdate { get; set; }
        public string UserLastUpdate { get; set; }

        public Product()
        {
            Created = DateTime.UtcNow;
        }
    }
}