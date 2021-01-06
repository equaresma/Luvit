using System;
using System.Collections.Generic;
using System.Text;
using com.luvit.model;

namespace com.luvit.service.impl
{
    public class CustomerService : ServiceAbs<Customer, string>
    {
        public CustomerService(string uri) : base(uri)
        {

        }
    }
}
