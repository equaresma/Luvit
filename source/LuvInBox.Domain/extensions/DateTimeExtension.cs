using System;
namespace com.luvinbox.domain.extensions {
    public static class DateTimeExtension {
        public static Int32 GetAge(this DateTime dateOfBirth) {
            var today = DateTime.Today;

            var a = (today.Year * 100 + today.Month) * 100 + today.Day;
            var b = (dateOfBirth.Year * 100 + dateOfBirth.Month) * 100 + dateOfBirth.Day;

            return (a - b) / 10000;
        }

    }
}
