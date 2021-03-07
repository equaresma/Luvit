using com.luvinbox.domain.enums;
using com.luvinbox.domain.helper;
using com.luvinbox.domain.Properties;
using System;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.domain.compose
{
    public class ContactDocument : DocumentAbs
    {
        public ContactDocument()
        {
            Type = enumDocumentType.enumDocTypeCPF;
        }

        [DataType(DataType.Text)]
        [Display(Name = "lblNumber", ResourceType = typeof(AppRes))]
        public override String Number { get; set; }
        
    }
}
