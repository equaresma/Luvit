﻿using com.luvinbox.domain.compose;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.domain.entities
{
    [Serializable]
    public class Vendor : BaseEntity
    {
        public string Name { get; set; }
        public string FantasyName { get; set; }
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime FoundedIn { get; set; }
        public CompanyDocument Document { get; set; }
        public string LogoURL { get; set; }
        public string WebSite { get; set; }
        public string Email { get; set; }
        public Address MainAddress { get; set; }
        public Address AlternativeAddress { get; set; }
        [DataType(DataType.PhoneNumber)]
        public String MainPhone { get; set; }
        [DataType(DataType.PhoneNumber)]
        public String Mobile { get; set; }
        public Boolean HasPhysicalStore { get; set; }
        public VendorContact Contact { get; set; }
        public BankInformation BankInfo { get; set; }

        public Vendor()
        {
            MainAddress = new Address();
        }
    }
}