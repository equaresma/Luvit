using com.luvinbox.domain.compose;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;

namespace com.luvinbox.domain.entities {
    [Serializable]
    public class Order : BaseEntity {
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime Position { get; set; }
        [BsonRepresentation(BsonType.ObjectId)]
        public string CustomerId { get; set; }
        public string CustomerName { get; set; }
        public List<OrderItem> Items { get; set; }
        public PaymentInfo Payment { get; set; }
        //frete
        public decimal Shipping { get; set; }
        public Address Address { get; set; }

        public Order() {
            Items = new List<OrderItem>();
        }

    }
}
