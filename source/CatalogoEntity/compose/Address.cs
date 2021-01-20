using MongoDB.Bson.Serialization.Attributes;
using System;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.model.compose
{
	[Serializable]
	public class Address
	{
		[Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredLocal", ErrorMessageResourceType = typeof(AppRes))]
		[DataType(DataType.Text)]
		[Display(Name = "lblAddLocal", ResourceType = typeof(AppRes))]
		public virtual String Local { get; set; }
		[Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredNumber", ErrorMessageResourceType = typeof(AppRes))]
		[Display(Name = "lblAddNumber", ResourceType = typeof(AppRes))]
		public virtual Int32 Number { get; set; }
		[DataType(DataType.Text)]
		[Display(Name = "lblAddComplement", ResourceType = typeof(AppRes))]
		public virtual String Complement { get; set; }
		[Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredCity", ErrorMessageResourceType = typeof(AppRes))]
		[DataType(DataType.Text)]
		[Display(Name = "lblAddCity", ResourceType = typeof(AppRes))]
		public virtual String City { get; set; }
		[Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredState", ErrorMessageResourceType = typeof(AppRes))]
		[DataType(DataType.Text)]
		[Display(Name = "lblAddState", ResourceType = typeof(AppRes))]
		public virtual String State { get; set; }
		[Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredCountry", ErrorMessageResourceType = typeof(AppRes))]
		[DataType(DataType.Text)]
		[Display(Name = "lblAddCountry", ResourceType = typeof(AppRes))]
		public virtual String Country { get; set; }
		[Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredZipCode", ErrorMessageResourceType = typeof(AppRes))]
		[DataType(DataType.Text)]
		[RegularExpression(@"^\d{8}$", ErrorMessageResourceName = "InvalidZipCode", ErrorMessageResourceType = typeof(AppRes))]
		[Display(Name = "lblAddZipCode", ResourceType = typeof(AppRes))]
		public virtual String ZipCode { get; set; }

		[BsonIgnore]
		public String Tag { get; set; }

		public Address()
		{
		}

		public override string ToString()
		{
			return string.Format("[{0}, {1} {2}, {3} - {4} {5} {6}]", Local, Number, Complement, City, State, Country, ZipCode);
		}
	}
}
