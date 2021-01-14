using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace com.luvinbox.model.enums
{
	public enum enumDocumentType : int
	{
		[Display(Name = "enumDocRG", ResourceType = typeof(AppRes))]
		enumDocTypeRG = 0,
		[Display(Name = "enumDocCPF", ResourceType = typeof(AppRes))]
		enumDocTypeCPF = 1,
		[Display(Name = "enumDocRNE", ResourceType = typeof(AppRes))]
		enumDocTypeRNE = 2,
		[Display(Name = "enumDocPassport", ResourceType = typeof(AppRes))]
		enumDocTypePassport = 3,
		[Display(Name = "enumDriverLicense", ResourceType = typeof(AppRes))]
		enumDocTypeDriverLicense = 4,
		[Display(Name = "enumDocCNPJ", ResourceType = typeof(AppRes))]
		enumDocCNPJ = 5,
	}
}
