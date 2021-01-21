using com.luvinbox.model.Properties;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.model.enums
{
    public enum enumMaritalStatus : int
	{
		[Display(Name = "enumMaritalStsSingle", ResourceType = typeof(AppRes))]
		enumMaritalStsSingle = 0,
		[Display(Name = "enumMaritalStsMarried", ResourceType = typeof(AppRes))]
		enumMaritalStsMarried = 1,
		[Display(Name = "enumMaritalStsSeparated", ResourceType = typeof(AppRes))]
		enumMaritalStsSeparated = 2,
		[Display(Name = "enumMaritalStsDivorced", ResourceType = typeof(AppRes))]
		enumMaritalStsDivorced = 3,
		[Display(Name = "enumMaritalStsWidowed", ResourceType = typeof(AppRes))]
		enumMaritalStsWidowed = 4,
	}
}
