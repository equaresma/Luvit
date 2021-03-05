using com.luvinbox.domain.compose;
using com.luvinbox.domain.enums;
using com.luvinbox.domain.helper;
using com.luvinbox.domain.Properties;
using System;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.domain.dtos
{
    [CPF(ErrorMessage = "CPF inválido")]
    [Serializable]
    public class CustomerDTO : PersonDTO
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

        public string Nickname { get; set; }

        public bool IsPublic { get; set; }

        public UserDTO User { get; set; }

        public CustomerDTO()
        {
            Document = new CustomerDocument();
            Address = new Address();
            User = new UserDTO();
        }
    }
}
