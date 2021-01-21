using com.luvinbox.model.compose;
using System;
using System.ComponentModel.DataAnnotations;
using System.Reflection;

namespace com.luvinbox.model.helper
{
    [AttributeUsage(AttributeTargets.Class, AllowMultiple = false)]
    public class CNPJ : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            ValidationResult result = null;
            object instance = validationContext.ObjectInstance;
            Type type = instance.GetType();
            PropertyInfo propertyDoc = type.GetProperty("DocumentNumber");
            Document doc = propertyDoc.GetValue(instance) as Document;

            if (doc != null) {
                if (doc.Type == enums.enumDocumentType.enumDocCNPJ)
                {
                    if (!DocumentValidator.IsCNPJValid(doc.Number))
                    {
                        result = new ValidationResult("CNPJ inválido");
                    }
                }
            }

            return result;
        }   
    }
}
