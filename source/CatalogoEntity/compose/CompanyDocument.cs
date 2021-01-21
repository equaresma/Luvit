using com.luvinbox.model.enums;
using com.luvinbox.model.Properties;
using System;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.model.compose
{
    public class CompanyDocument : DocumentAbs
    {
        public CompanyDocument(): base(enumDocumentType.enumDocCNPJ)
        {

        }

        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredNumber", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Text)]
        [Display(Name = "lblNumber", ResourceType = typeof(AppRes))]
        public override String Number { get; set; }
        
    }
}
