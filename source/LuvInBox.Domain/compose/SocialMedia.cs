using System;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.domain.compose
{
    public class SocialMedia
    {
		[DataType(DataType.Text)]
		[Display(Name = "Facebook")]
		public virtual String Facebook { get; set; }

		[DataType(DataType.Text)]
		[Display(Name = "Instagram")]
		public virtual String Instagram { get; set; }

		[DataType(DataType.Text)]
		[Display(Name = "LinkedIn")]
		public virtual String LinkedIn { get; set; }

		[DataType(DataType.Text)]
		[Display(Name = "Twiter")]
		public virtual String Twiter { get; set; }
	}
}
