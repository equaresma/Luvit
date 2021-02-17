using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;

namespace com.luvinbox.domain.entities
{
    [Serializable]
    public class Order : BaseEntity
    {
        private String _paymentStatus;
        
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime Position { get; set; }
        [BsonRepresentation(BsonType.ObjectId)]
        public String CustomerId { get; set; }
        public String CustomerName { get; set; }
        public List<OrderItem> Items { get; set; }
        public String PaymentId { get; set; }
        public String PaymentToken { get; set; }
        public Boolean PaymentSuccess { get; set; }
        public String PaymentStatus
        {
            get { return _paymentStatus; }
            set
            {
                PaymentPreviousStatus = _paymentStatus;
                _paymentStatus = value;
            }
        }
        public String PaymentPreviousStatus { get; set; }
        public String PaymentForm { get; set; }
        public String PaymentType { get; set; }
        public Boolean IsPaid { get; set; }

        public Order()
        {
            Items = new List<OrderItem>();
        }
       
    }
}
