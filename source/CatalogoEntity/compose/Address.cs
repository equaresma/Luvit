using System;

namespace com.luvit.model.compose
{
    public class Address
    {
        public String Locale { get;set;}
        public UInt32 Number { get; set; }
        public String Complement { get; set; }
        public String ZipCode { get; set; }
        public String City { get; set; }
        public String State { get; set; }
        public String Country { get; set; }
    }
}
