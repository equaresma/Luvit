﻿using System;

namespace com.luvinbox.model
{
    public class PhoneNumber
    {
        public UInt16 CountryCode { get; set; }
        public UInt16 LocaleCode { get; set; }
        public UInt32 Number { get; set; }
    }
}