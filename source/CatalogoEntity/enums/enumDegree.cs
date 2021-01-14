using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.model.enums
{
    public enum enumDegree : int
	{
		[Display(Name = "enumDegreeHighSchool", ResourceType = typeof(AppRes))]
		enumDegreeHighSchool = 0,
		[Display(Name = "enumDegreeCollege", ResourceType = typeof(AppRes))]
		enumDegreeCollege = 1,
		[Display(Name = "enumDegreeMBA", ResourceType = typeof(AppRes))]
		enumDegreeMBA = 2,
		[Display(Name = "enumPostgraduate", ResourceType = typeof(AppRes))]
		enumPostgraduate = 3,
		[Display(Name = "enumMaster", ResourceType = typeof(AppRes))]
		enumMaster = 4,
		[Display(Name = "enumPhD", ResourceType = typeof(AppRes))]
		enumPhD = 5,
	}
}
