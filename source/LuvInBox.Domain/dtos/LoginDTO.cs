using com.luvinbox.domain.enums;
using System;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.domain.dtos {
    public class LoginDTO : BaseDTO {
        [Required(ErrorMessage = "Email Obrigatório")]
        [EmailAddress(ErrorMessage = "Email inválido")]
        public String Name {
            get; set;
        }

        [Required(ErrorMessage = "Email Obrigatório")]
        public String Password {
            get; set;
        }

        public enumUserType Type {
            get; set;
        }

        public string RemoteAddress {
            get; set;
        }

        public Boolean IsActive {
            get; set;
        }

        public String PersonId {
            get; set;
        }

        public LoginDTO() {
        }

        public override String ToString() {
            return this.Name;
        }
    }
}
