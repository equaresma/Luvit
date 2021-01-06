using System;
using System.Collections.Generic;
using System.Text;
using com.luvit.model;

namespace com.luvit.service.impl
{
    public class VendorService : ServiceAbs<Vendor, string>
    {
        public VendorService(string uri) : base(uri)
        {

        }
    }
}
