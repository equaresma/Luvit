using com.luvinbox.domain.Properties;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.domain.enums
{
    public enum enumGender : int
	{
		[Display(Name = "enumGenderFemale", ResourceType = typeof(AppRes))]
		enumGenderFemale = 0,
		[Display(Name = "enumGenderMale", ResourceType = typeof(AppRes))]
		enumGenderMale = 1,
	}
}
