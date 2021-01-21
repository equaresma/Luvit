using com.luvinbox.model.Properties;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace com.luvinbox.model.compose
{
    public class BankInformation
    {
        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredBankCode", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Text)]
        [Display(Name = "lblBankCode", ResourceType = typeof(AppRes))]
        public String BankCode { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredBankBranch", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Text)]
        [Display(Name = "lblBankBranch", ResourceType = typeof(AppRes))]
        public String BankBranch { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredAccountNumber", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Text)]
        [Display(Name = "lblAccountNumber", ResourceType = typeof(AppRes))]
        public String AccountNumber { get; set; }

    }
}
