using com.luvinbox.domain.compose;

namespace com.luvinbox.domain.interfaces {
    public interface IPayer {
        string FirstName { get; set; }
        string FamilyName { get; set; }
        string Email { get; set; }
        string Phone { get; set; }
        string Document { get; set; }
    }
}
