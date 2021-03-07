using com.luvinbox.domain.Properties;
using ExpressiveAnnotations.Attributes;
using System;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.domain.compose {
    public class BankInformation
    {
        [RequiredIf("BankBranch != null || AccountNumber != null", ErrorMessageResourceName = "RequiredBankCode", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Text)]
        [MaxLength(15)]
        [Display(Name = "lblBankCode", ResourceType = typeof(AppRes))]
        public String BankCode { get; set; }

        [RequiredIf("BankCode != null || AccountNumber != null ", ErrorMessageResourceName = "RequiredBankBranch", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Text)]
        [MaxLength(30)]
        [Display(Name = "lblBankBranch", ResourceType = typeof(AppRes))]
        public String BankBranch { get; set; }

        [RequiredIf("BankBranch != null || BankCode != null", ErrorMessageResourceName = "RequiredAccountNumber", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Text)]
        [MaxLength(30)]
        [Display(Name = "lblAccountNumber", ResourceType = typeof(AppRes))]
        public String AccountNumber { get; set; }

    }
}
