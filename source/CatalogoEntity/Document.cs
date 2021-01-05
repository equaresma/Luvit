using System;
using System.Collections.Generic;
using System.Text;

namespace com.luvit.model
{
    public enum enumDocType : UInt16
    {
        docId = 0,
        docCPF = 1,
        docRNE = 2,
        docDriverLicense = 3,
        docPassport = 4
    }

    public class Document { 
        public enumDocType Type { get; set; }
        public String Number { get; set; } 
    }
}
