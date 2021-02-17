using com.luvinbox.domain.enums;
using System;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.domain.entities
{
	[Serializable]
	public class Login : BaseEntity
	{
        public string Name { get; set; }
        public string RemoteAddress
		{
			get; set;
		}

		public Boolean IsActive
		{
			get; set;
		}

		public String PersonId
		{
			get; set;
		}

		public Login()
		{
		}
		
	}
}
