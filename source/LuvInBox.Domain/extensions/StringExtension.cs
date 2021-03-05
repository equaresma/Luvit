using System;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;

namespace com.luvinbox.domain.extensions {
    public static class StringExtension {
        public static string CleanCharacters(this string doc) {
            //Exclui os caracteres: /, -, .
            Regex reg = new Regex(@"\/|\-|\.");
            return reg.Replace(doc, "");
        }
        public static bool AllCharactersAreEqual(this string doc, int quantidade) {
            //Procura por caracteres iguais.
            Regex reg = new Regex(doc.Substring(0, 1) + "{" + quantidade.ToString() + "}");
            return reg.IsMatch(doc);
        }
        public static string RemoveLastChar(this string me, Char last) {
            if (String.IsNullOrEmpty(me))
                return me;

            int idx = me.LastIndexOf(last);
            if (idx <= 0)
                return me;

            return me.Substring(0, idx);
        }
    }
}
