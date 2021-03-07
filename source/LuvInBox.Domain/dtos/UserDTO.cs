using com.luvinbox.domain.enums;
using com.luvinbox.domain.Properties;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.domain.dtos
{
    public class UserDTO : BaseDTO
    {
        [Required]
        [EmailAddress(ErrorMessageResourceName = "RequiredEmail", ErrorMessageResourceType = typeof(AppRes))]
        public string Name { get; set; }        
        [Required]
        public string Password
        {
            get; set;
        }
        public bool IsPasswordChange { get; set; }
        public enumUserType Type
        {
            get; set;
        }
    }
}
