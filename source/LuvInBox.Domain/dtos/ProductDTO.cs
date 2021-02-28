﻿using com.luvinbox.domain.compose;
using com.luvinbox.domain.enums;
using com.luvinbox.domain.Properties;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.domain.dtos
{
    public class ProductDTO : BaseDTO
    {
        public Int32 BarCode { get; set; }
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
        public Decimal OffPrice
        {
            get
            {
                decimal discount = Convert.ToDecimal(Off ?? 0);
                return Price - (Price * discount / 100);
            }
        }

        public ProductDTO()
        {
        }

        public override String ToString()
        {
            return String.Format($"{BarCode} - {Name} - {Description}");
        }

    }
}