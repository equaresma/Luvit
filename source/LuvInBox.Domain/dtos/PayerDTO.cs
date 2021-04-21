using com.luvinbox.domain.interfaces;

namespace com.luvinbox.domain.dtos {
    public class PayerDTO : IPayer {
        public string FirstName { get; set; }
        public string FamilyName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Document { get; set; }
    }
}
