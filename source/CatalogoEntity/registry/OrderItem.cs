using com.luvinbox.model.Properties;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace com.luvinbox.model.registry
{
	[Serializable]
	public class OrderItem
	{
		[BsonRepresentation(BsonType.ObjectId)]
		public String Id { get; set; }

		public String ProductId { get; set; }

		[Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredName", ErrorMessageResourceType = typeof(AppRes))]
		[Display(Name = "lblProduct", ResourceType = typeof(AppRes))]
		public String ProductName { get; set; }

		[Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredDescription", ErrorMessageResourceType = typeof(AppRes))]
		[Display(Name = "lblDescription", ResourceType = typeof(AppRes))]
		public String ProductDescription { get; set; }

		[Display(Name = "lblPrice", ResourceType = typeof(AppRes))]
		public Int32 Quantity { get; set; }

		[DataType(DataType.Currency)]
		[Display(Name = "lblPrice", ResourceType = typeof(AppRes))]
		public Decimal Price { get; set; }

		public String Tag { get; set; }

		public OrderItem()
		{
			var bytes = Guid.NewGuid().ToByteArray().Take(12).ToArray();
			this.Id = new ObjectId(bytes).ToString();
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
			return String.Format("{0}, {1}", ProductName, ProductDescription);
		}
	}
}
