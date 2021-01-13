using System;
using System.Collections.Generic;
using System.Text;
using com.luvinbox.model;

namespace com.luvinbox.service.impl
{
    public class CustomerService : ServiceAbs<Customer, string>
    {
        public CustomerService(string uri) : base(uri)
        {

        }
    }
}
