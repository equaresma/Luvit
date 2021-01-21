using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection;

namespace com.luvinbox.model.helper
{
    [AttributeUsage(AttributeTargets.Property, AllowMultiple = false)]
    public class ValidateIfRequired : ValidationAttribute
    {
        public Boolean AllowEmptyStrings { get; set; }
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            object instance = validationContext.ObjectInstance;
            Type type = instance.GetType();
            PropertyInfo proper = type.GetProperty(validationContext.MemberName);

            if (proper.GetCustomAttributes().AsQueryable().Where(x => x.GetType() == typeof(RequiredAttribute)).Count() > 1)
                return base.IsValid(value, validationContext);

            return ValidationResult.Success;
        }
    }
}
