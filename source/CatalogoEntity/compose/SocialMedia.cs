using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace com.luvinbox.model.compose
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
