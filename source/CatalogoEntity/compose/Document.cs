using com.luvinbox.model.enums;
using com.luvinbox.model.helper;
using ExpressiveAnnotations.Attributes;
using System;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.model.compose
{
    [CPF(ErrorMessage ="CPF inválido")]
    [CNPJ(ErrorMessage = "CNPJ inválido")]
    public class Document { 
        public enumDocumentType Type { get; set; }
        
        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredNumber", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Text)]
        public String Number { get; set; }
        
        [RequiredIf("Type == enumDocumentType.enumDocOthers")]
        public String Name { get; set; }
        
        public override int GetHashCode()
        {
            return Number.GetHashCode();
        }
        public override bool Equals(object obj)
        {
            Document doc = obj as Document;
            if (doc == null)
                return false;

            return (Type == doc.Type && Number == doc.Number);
        }
    }
}
