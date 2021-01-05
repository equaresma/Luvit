using System;
using System.Collections.Generic;
using System.Text;

namespace com.luvit.model
{
    public class Phone
    {
        public UInt16 CountryCode { get; set; }
        public UInt16 LocaleCode { get; set; }
        public UInt32 Number { get; set; }
    }
}
