using com.luvinbox.model.enums;
using com.luvinbox.model.Properties;
using System;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.model.compose
{
    public class ContactDocument : DocumentAbs
    {
        public ContactDocument(): base(enumDocumentType.enumDocTypeCPF)
        {

        }

        [DataType(DataType.Text)]
        [Display(Name = "lblNumber", ResourceType = typeof(AppRes))]
        public override String Number { get; set; }
        
    }
}
