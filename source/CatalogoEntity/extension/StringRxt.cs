using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace com.luvinbox.model.extension
{
    public static class StringRxt
    {
		public static String CleanCharacters(this String value)
		{
			//Exclui os caracteres: /, -, .
			Regex reg = new Regex(@"\/|\-|\.");
			return reg.Replace(value, "");
		}
		public static bool AllCharactersAreEqual(this String value, int quantity)
		{
			//Procura por caracteres iguais.
			Regex reg = new Regex(value.Substring(0, 1) + "{" + quantity.ToString() + "}");
			return reg.IsMatch(value);
		}
	}
}
