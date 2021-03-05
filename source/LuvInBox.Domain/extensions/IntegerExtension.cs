using System;
namespace com.luvinbox.domain.extensions {
    public static class IntegerExtension {
        public static bool IsBetween(this int me, int a, int b, bool include = true) {
            var left = Math.Min(a, b);
            var righ = Math.Max(a, b);

            return include ? (me >= left && me <= righ) : (me > left && me < righ);
        }
    }
}
