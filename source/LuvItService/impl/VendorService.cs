using System;
using System.Collections.Generic;
using System.Text;
using com.luvinbox.model;

namespace com.luvinbox.service.impl
{
    public class VendorService : ServiceAbs<Vendor, string>
    {
        public VendorService(string uri) : base(uri)
        {

        }
    }
}
