using com.luvinbox.model.Properties;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.model.enums
{
    public enum enumGender : int
	{
		[Display(Name = "enumGenderFemale", ResourceType = typeof(AppRes))]
		enumGenderFemale = 0,
		[Display(Name = "enumGenderMale", ResourceType = typeof(AppRes))]
		enumGenderMale = 1,
	}
}
