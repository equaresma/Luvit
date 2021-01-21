using com.luvinbox.model.helper;
using com.luvinbox.model.Properties;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace com.luvinbox.model.compose
{
    public class BankInformation
    {
        [ValidateIfRequired(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredBankCode", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Text)]
        [MaxLength(10)]
        [Display(Name = "lblBankCode", ResourceType = typeof(AppRes))]
        public String BankCode { get; set; }

        [ValidateIfRequired(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredBankBranch", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Text)]
        [MaxLength(10)]
        [Display(Name = "lblBankBranch", ResourceType = typeof(AppRes))]
        public String BankBranch { get; set; }

        [ValidateIfRequired(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredAccountNumber", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Text)]
        [MaxLength(20)]
        [Display(Name = "lblAccountNumber", ResourceType = typeof(AppRes))]
        public String AccountNumber { get; set; }

    }
}
