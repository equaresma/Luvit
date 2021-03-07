using com.luvinbox.domain.enums;
using com.luvinbox.domain.helper;
using com.luvinbox.domain.Properties;
using System;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.domain.compose
{
    [CNPJ(ErrorMessageResourceName = "RequiredNumber", ErrorMessageResourceType = typeof(AppRes))]
    public class CompanyDocument : DocumentAbs
    {
        public CompanyDocument()
        {
            Type = enumDocumentType.enumDocCNPJ;
        }

        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredNumber", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Text)]
        [Display(Name = "lblNumber", ResourceType = typeof(AppRes))]
        public override String Number { get; set; }
        
    }
}
