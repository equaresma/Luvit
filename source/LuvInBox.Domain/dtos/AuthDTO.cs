using com.luvinbox.domain.enums;
using System;

namespace com.luvinbox.domain.dtos {
    public class AuthDTO {
        public bool Authenticated { get; set; }
        public DateTime Created { get; set; }
        public DateTime Expiration { get; set; }
        public string AccessToken { get; set; }
        public string Username { get; set; }
        public string Message { get; set; }
        public enumUserType Type { get; set; }
    }
}
