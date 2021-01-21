using com.luvinbox.model.Properties;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace com.luvinbox.model.registry
{
    [Serializable]
    public class Order : IEntity<String>
    {
        private String _paymentStatus;

        [BsonRepresentation(BsonType.ObjectId)]
        public String Id { get; set; }

        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredDate", ErrorMessageResourceType = typeof(AppRes))]
        [Display(Name = "lblPosition", ResourceType = typeof(AppRes))]
        public DateTime Position { get; set; }

        [BsonRepresentation(BsonType.ObjectId)]
        public String CustomerId { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredCustomerName", ErrorMessageResourceType = typeof(AppRes))]
        [Display(Name = "lblCustomer", ResourceType = typeof(AppRes))]
        public String CustomerName { get; set; }

        public List<OrderItem> Items { get; set; }

        [Display(Name = "lblPaymentId", ResourceType = typeof(AppRes))]
        public String PaymentId { get; set; }

        [Display(Name = "lblPaymentToken", ResourceType = typeof(AppRes))]
        public String PaymentToken { get; set; }

        [Display(Name = "lblPaymentSuccess", ResourceType = typeof(AppRes))]
        public Boolean PaymentSuccess { get; set; }

        [Display(Name = "lblPaymentStatus", ResourceType = typeof(AppRes))]
        public String PaymentStatus
        {
            get { return _paymentStatus; }
            set
            {
                PaymentPreviousStatus = _paymentStatus;
                _paymentStatus = value;
            }
        }

        [Display(Name = "lblPaymentPreviousStatus", ResourceType = typeof(AppRes))]
        public String PaymentPreviousStatus { get; set; }

        [Display(Name = "lblPaymentForm", ResourceType = typeof(AppRes))]
        public String PaymentForm { get; set; }

        [Display(Name = "lblPaymentType", ResourceType = typeof(AppRes))]
        public String PaymentType { get; set; }

        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime Created { get; set; }

        public string Creator { get; set; }

        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime LastUpdate { get; set; }

        public string UserLastUpdate { get; set; }

        [Display(Name = "lblIsPaid", ResourceType = typeof(AppRes))]
        public Boolean IsPaid { get; set; }

        public Order()
        {
            Items = new List<OrderItem>();
        }

        public override int GetHashCode()
        {
            return this.Id.GetHashCode();
        }
        public override bool Equals(object obj)
        {
            Person p = obj as Person;
            if (p == null)
                return false;

            return this.Id == p.Id;
        }
        public override String ToString()
        {
            return String.Format("{0}, {1}", CustomerName, Items.Count);
        }
    }
}
