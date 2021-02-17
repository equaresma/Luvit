using com.luvinbox.domain.compose;
using com.luvinbox.domain.Properties;
using System;
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace com.luvinbox.domain.dtos
{
    [Serializable]
	public abstract class PersonDTO : BaseDTO
	{
		[Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredFamilyName", ErrorMessageResourceType = typeof(AppRes))]
		[DataType(DataType.Text)]
		[Display(Name = "lblFamilyName", ResourceType = typeof(AppRes))]
		public string FamilyName { get; set; }

		[DataType(DataType.Text)]
		[Display(Name = "lblMiddleName", ResourceType = typeof(AppRes))]
		public string MiddleName { get; set; }

		[Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredName", ErrorMessageResourceType = typeof(AppRes))]
		[DataType(DataType.Text)]
		[Display(Name = "lblFirstName", ResourceType = typeof(AppRes))]
		public string FirstName { get; set; }

		[DataType(DataType.Date)]
		[Display(Name = "lblBirthday", ResourceType = typeof(AppRes))]
		public DateTime? Birthday { get; set; }

		[Display(Name = "lblAddress", ResourceType = typeof(AppRes))]
		public virtual Address Address { get; set; }

		public virtual SocialMedia SocialNetwork { get; set; }
		[Display(Name = "lblPhoneNumber", ResourceType = typeof(AppRes))]
		[DataType(DataType.PhoneNumber)]
		public String Phone { get; set; }

		[DataType(DataType.PhoneNumber)]
		[Display(Name = "lblMobileNumber", ResourceType = typeof(AppRes))]
		public String Mobile { get; set; }
		[Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredEmail", ErrorMessageResourceType = typeof(AppRes))]
		[DataType(DataType.Text)]
		[RegularExpression(@"^([\w\-]+\.)*[\w\- ]+@([\w\- ]+\.)+([\w\-]{2,3})$", ErrorMessageResourceName = "InvalidEmail", ErrorMessageResourceType = typeof(AppRes))]
		[Display(Name = "lblEmail", ResourceType = typeof(AppRes))]
		public string Email { get; set; }
		
		public abstract IDocument Document { get; set; }
		
		public PersonDTO()
		{
			Address = new Address();
			SocialNetwork = new SocialMedia();
		}

		public override String ToString()
		{
			return String.Format("{0} {1} {2}", FirstName, MiddleName, FamilyName);
		}
		public static bool IsNotFamilyName(string lastName)
		{
			Regex reg = new Regex("\\b(j[úu]nior|jr|neto|filho)\\b", RegexOptions.IgnoreCase);
			return reg.IsMatch(lastName);
		}
	}
}
