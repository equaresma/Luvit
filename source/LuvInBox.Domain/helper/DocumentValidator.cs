using com.luvinbox.domain.extensions;
using System;
using System.Collections.Generic;
using System.Linq;

namespace com.luvinbox.domain.helper {
    public static class DocumentValidator {
        public static bool IsCNPJValid(string doc) {
            doc = doc.CleanCharacters();

            if (doc.Length != 14)
                throw new ArgumentException("msgInvalidCnpjLenght");

            List<int> mult = new List<int>(new int[] { 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2 });
            List<int> dig = new List<int>();
            List<char> cont = doc.Substring(0, 12).ToCharArray().ToList();
            List<char> cDig = doc.Substring(12, 2).ToCharArray().ToList();

            for (int i = 1; i >= 0; i--) {
                int ind = i;
                int sum = 0;

                for (int k = 0; k < mult.Count - 1; k++) {
                    int j = Convert.ToInt16(cont[k].ToString());
                    sum += j * mult[ind];
                    ind++;
                }

                double res = sum % 11;

                if (res < 2d) {
                    res = 0;
                } else {
                    res = 11 - res;
                }

                mult.Add(Convert.ToInt16(res));
                cont.Add(Convert.ToChar(res.ToString()));
                dig.Add(Convert.ToInt16(res));

            }

            if (Convert.ToInt16(cDig[0].ToString()) == dig[0] &&
                Convert.ToInt16(cDig[1].ToString()) == dig[1])
                return true;
            else
                return false;
        }
        public static bool IsCPFValid(string doc) {
            doc = doc.CleanCharacters();

            if (doc.Length != 11)
                throw new ArgumentException("msgInvalidCpfLenght");

            List<int> mult = new List<int>(new int[] { 10, 9, 8, 7, 6, 5, 4, 3, 2 });
            List<int> dig = new List<int>();
            List<char> cont = doc.Substring(0, 9).ToCharArray().ToList();
            List<char> cDig = doc.Substring(9, 2).ToCharArray().ToList();

            for (int i = 1; i >= 0; i--) {
                int ind = 0;
                int sum = 0;

                for (int k = 0; k < mult.Count; k++) {
                    int j = Convert.ToInt16(cont[k].ToString());
                    sum += j * mult[ind];
                    ind++;
                }

                double res = sum % 11;

                if (res < 2d) {
                    res = 0;
                } else {
                    res = 11 - res;
                }

                mult.Insert(0, 11);
                cont.Add(Convert.ToChar(res.ToString()));
                dig.Add(Convert.ToInt16(res));
            }

            if (Convert.ToInt16(cDig[0].ToString()) == dig[0] &&
                Convert.ToInt16(cDig[1].ToString()) == dig[1])
                return true;
            else
                return false;
        }
        public static string FormatCPF(string doc) {
            return string.Format(@"{0:000\.000\.000\-00}", Convert.ToInt64(doc));
        }
        public static string FormatCNPJ(string doc) {
            return string.Format(@"{0:00\.000\.000\/0000\-00}", Convert.ToDouble(doc));
        }
    }
}
