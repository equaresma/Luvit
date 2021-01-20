using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace com.luvinbox.model.enums
{
	public enum enumDocumentType : int
	{
		[Display(Name = "enumDocOthers", ResourceType = typeof(AppRes))]
		enumDocOthers = -1,
		[Display(Name = "enumDocID", ResourceType = typeof(AppRes))]
		enumDocTypeID = 0,
		[Display(Name = "enumDocCPF", ResourceType = typeof(AppRes))]
		enumDocTypeCPF = 1,
		[Display(Name = "enumDocRNE", ResourceType = typeof(AppRes))]
		enumDocTypeRNE = 2,
		[Display(Name = "enumDocPassport", ResourceType = typeof(AppRes))]
		enumDocTypePassport = 3,
		[Display(Name = "enumDriverLicense", ResourceType = typeof(AppRes))]
		enumDocTypeDriverLicense = 4,
		//IF: Instituição Financeira
		//CNPJ: Cadastro Nacional de Pessoa Jurídica
		//EIN: Employer Identification Number que é o registro da sua empresa junto a receita federal Americana.
		[Display(Name = "enumDocIF", ResourceType = typeof(AppRes))]
		enumDocCNPJ = 5,
	}
}
