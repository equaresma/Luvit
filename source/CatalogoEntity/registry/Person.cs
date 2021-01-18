using com.luvinbox.model.compose;
using com.luvinbox.model.enums;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace com.luvinbox.model.registry
{
    [Serializable]
	public abstract class Person : IEntity<String>
	{
		[BsonRepresentation(BsonType.ObjectId)]
		public String Id { get; set; }
		[Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredName", ErrorMessageResourceType = typeof(AppRes))]
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
		[BsonDateTimeOptions(Kind = DateTimeKind.Local)]
		[Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredDate", ErrorMessageResourceType = typeof(AppRes))]
		[DataType(DataType.Date)]
		[DynamicDisplayFormat(ApplyFormatInEditMode = true)]
		[Display(Name = "lblBirthday", ResourceType = typeof(AppRes))]
		public DateTime Birthday { get; set; }
		[Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredName", ErrorMessageResourceType = typeof(AppRes))]
		[DataType(DataType.Text)]
		[Display(Name = "lblHomeTown", ResourceType = typeof(AppRes))]
		public String HomeTown { get; set; }
		[Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredName", ErrorMessageResourceType = typeof(AppRes))]
		[DataType(DataType.Text)]
		[Display(Name = "lblHomeState", ResourceType = typeof(AppRes))]
		public String HomeState { get; set; }
		[Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredName", ErrorMessageResourceType = typeof(AppRes))]
		[DataType(DataType.Text)]
		[Display(Name = "lblHomeCountry", ResourceType = typeof(AppRes))]
		public String HomeCountry { get; set; }
		[Display(Name = "lblAddress", ResourceType = typeof(AppRes))]
		public Address Address { get; set; }
		public SocialMedia SocialNetwork { get; set; }
		[DataType(DataType.PhoneNumber)]
		public String Phone { get; set; }
		[DataType(DataType.PhoneNumber)]
		public String Mobile { get; set; }
		[Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredEmail", ErrorMessageResourceType = typeof(AppRes))]
		[DataType(DataType.Text)]
		[RegularExpression(@"^([\w\-]+\.)*[\w\- ]+@([\w\- ]+\.)+([\w\-]{2,3})$", ErrorMessageResourceName = "InvalidEmail", ErrorMessageResourceType = typeof(AppRes))]
		[Display(Name = "lblEmail", ResourceType = typeof(AppRes))]
		public string Email { get; set; }
		[Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredDocument", ErrorMessageResourceType = typeof(AppRes))]
		[DataType(DataType.Text)]
		[Display(Name = "lblDocumentNumber", ResourceType = typeof(AppRes))]
		public Document Document { get; set; }
		[Display(Name = "lblGender", ResourceType = typeof(AppRes))]
		public enumGender Gender { get; set; }
		[Display(Name = "lblMaritalStatus", ResourceType = typeof(AppRes))]
		public enumMaritalStatus MaritalStatus { get; set; }
		[Display(Name = "lblDegree", ResourceType = typeof(AppRes))]
		public enumDegree Degree { get; set; }
		[BsonDateTimeOptions(Kind = DateTimeKind.Local)]
		public DateTime Created { get; set; }
		public string Creator { get; set; }
		[BsonDateTimeOptions(Kind = DateTimeKind.Local)]
		public DateTime LastUpdate { get; set; }
		public string UserLastUpdate { get; set; }
		
		public Person()
		{
			Created = DateTime.UtcNow;
			Document = new Document() { Type = enumDocumentType.enumDocTypeCPF };
			Address = new Address();
			SocialNetwork = new SocialMedia();
		}

		public override int GetHashCode()
		{
			return this.ToString().GetHashCode();
		}
		public override bool Equals(object obj)
		{
			Person p = obj as Person;
			if (p == null)
				return false;

			return Document.Equals(p.Document);
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
