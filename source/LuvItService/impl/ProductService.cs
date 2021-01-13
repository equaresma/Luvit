using System;
using System.Collections.Generic;
using System.Text;
using com.luvinbox.model;

namespace com.luvinbox.service.impl
{
    public class ProductService : ServiceAbs<Product, Int32>
    {
        public ProductService(string uri) : base(uri)
        {

        }
    }
}
