using com.luvinbox.model.compose;
using com.luvinbox.model.enums;
using com.luvinbox.model.helper;
using com.luvinbox.model.Properties;
using System;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.model.registry
{
    [CPF(ErrorMessage = "CPF inválido")]
    [Serializable]
    public class Customer : Person
    {
        [Required]
        [Display(Name = "lblDocumentNumber", ResourceType = typeof(AppRes))]
        public override IDocument Document { get; set; }

        [Required]
        [Display(Name = "lblAddress", ResourceType = typeof(AppRes))]
        public override Address Address { get; set; }

        [Display(Name = "lblGender", ResourceType = typeof(AppRes))]
        public enumGender Gender { get; set; }

        [Display(Name = "lblMaritalStatus", ResourceType = typeof(AppRes))]
        public enumMaritalStatus MaritalStatus { get; set; }

        [Display(Name = "lblDegree", ResourceType = typeof(AppRes))]
        public enumDegree Degree { get; set; }

        public Customer()
        {
            Document = new CustomerDocument();
            Address = new Address();
        }
    }
}
