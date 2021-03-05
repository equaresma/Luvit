using System;

namespace com.luvinbox.domain.entities {
    [Serializable]
    public class Login : BaseEntity {
        public string Name { get; set; }
        public string RemoteAddress {
            get; set;
        }
        public Boolean IsActive {
            get; set;
        }
        public String PersonId {
            get; set;
        }
        public string Token { get; set; }
        public DateTime Expiration { get; set; }

        public Login() {
        }
    }
}
