using com.luvinbox.model.enums;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace com.luvinbox.model.system
{
    public class Login : IEntity<String>
	{
		[BsonRepresentation(BsonType.ObjectId)]
		public String Id
		{
			get; set;
		}

		public String UserName
		{
			get; set;
		}

		public String Password
		{
			get; set;
		}

		public enumUserType Type
		{
			get; set;
		}

		public string RemoteAddress
		{
			get; set;
		}

		public Boolean IsActive
		{
			get; set;
		}

		public DateTime Created
		{
			get; set;
		}

		public string Creator
		{
			get; set;
		}

		public DateTime LastUpdate
		{
			get; set;
		}

		public string UserLastUpdate
		{
			get; set;
		}

		public String PersonId
		{
			get; set;
		}

		public Login()
		{
			Created = DateTime.Now;
			Creator = "itself";
		}

		public override int GetHashCode()
		{
			return this.ToString().GetHashCode();
		}
		public override bool Equals(object obj)
		{
			Login p = obj as Login;
			if (p == null)
				return false;

			return this.UserName == p.UserName;
		}
		public override String ToString()
		{
			return this.UserName;
		}
	}
}
