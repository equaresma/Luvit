using com.luvinbox.domain.enums;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.domain.dtos
{
    public class UserDTO : BaseDTO
    {
        [Required]
        public string Name { get; set; }
        [Required(ErrorMessage = "Email Obrigatório")]
        [EmailAddress(ErrorMessage = "Email inválido")]
        public string Email { get; set; }
        [Required]
        [RegularExpression("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")]
        public string Password
        {
            get; set;
        }
        public enumUserType Type
        {
            get; set;
        }
    }
}
