using System.Text.RegularExpressions;

namespace com.luvinbox.domain.helper{
    public class PasswordValidation {
        public static bool IsValid(string pwd) {
            var rg = new Regex("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
            return rg.IsMatch(pwd);
        }
    }
}
