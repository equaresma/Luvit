using com.luvinbox.domain.helper;
using com.luvinbox.domain.Properties;
using System;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.domain.compose
{
    [Serializable]
	public class Address
	{
		[ValidateIfRequired(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredLocal", ErrorMessageResourceType = typeof(AppRes))]
		[DataType(DataType.Text)]
		[MaxLength(255)]
		[Display(Name = "lblAddLocal", ResourceType = typeof(AppRes))]
		public virtual String Local { get; set; }

		[ValidateIfRequired(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredNumber", ErrorMessageResourceType = typeof(AppRes))]
		[Display(Name = "lblAddNumber", ResourceType = typeof(AppRes))]
		public virtual Int32 Number { get; set; }

		[DataType(DataType.Text)]
		[MaxLength(255)]
		[Display(Name = "lblAddComplement", ResourceType = typeof(AppRes))]
		public virtual String Complement { get; set; }

		[ValidateIfRequired(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredCity", ErrorMessageResourceType = typeof(AppRes))]
		[DataType(DataType.Text)]
		[MaxLength(150)]
		[Display(Name = "lblAddCity", ResourceType = typeof(AppRes))]
		public virtual String City { get; set; }

		[ValidateIfRequired(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredState", ErrorMessageResourceType = typeof(AppRes))]
		[DataType(DataType.Text)]
		[MaxLength(30)]
		[Display(Name = "lblAddState", ResourceType = typeof(AppRes))]
		public virtual String State { get; set; }

		[ValidateIfRequired(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredCountry", ErrorMessageResourceType = typeof(AppRes))]
		[DataType(DataType.Text)]
		[MaxLength(150)]
		[Display(Name = "lblAddCountry", ResourceType = typeof(AppRes))]
		public virtual String Country { get; set; }

		[ValidateIfRequired(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredZipCode", ErrorMessageResourceType = typeof(AppRes))]
		[DataType(DataType.Text)]
		[MaxLength(20)]
		[RegularExpression(@"^[0-9]{5,8}[-]?[\d]{3,5}$", ErrorMessageResourceName = "InvalidZipCode", ErrorMessageResourceType = typeof(AppRes))]
		[Display(Name = "lblAddZipCode", ResourceType = typeof(AppRes))]
		public virtual String ZipCode { get; set; }

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
