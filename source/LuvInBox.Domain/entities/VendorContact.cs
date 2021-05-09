using com.luvinbox.domain.compose;

namespace com.luvinbox.domain.entities {
    public class VendorContact : Person {
        public override Address Address { get; set; }
    }
}
