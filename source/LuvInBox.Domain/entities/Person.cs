using com.luvinbox.domain.compose;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace com.luvinbox.domain.entities
{
    [Serializable]
	public abstract class Person : BaseEntity
	{
		public string FamilyName { get; set; }
		public string MiddleName { get; set; }
		public string FirstName { get; set; }
		[BsonDateTimeOptions(Kind = DateTimeKind.Local)]
		public DateTime Birthday { get; set; }
		public virtual Address Address { get; set; }
		public virtual SocialMedia SocialNetwork { get; set; }
		public String Phone { get; set; }
		public String Mobile { get; set; }
		public string Email { get; set; }
		
		public Person()
		{
			Address = new Address();
			SocialNetwork = new SocialMedia();
		}
	}
}
