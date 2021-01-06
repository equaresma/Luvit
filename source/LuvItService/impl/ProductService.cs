using System;
using System.Collections.Generic;
using System.Text;
using com.luvit.model;

namespace com.luvit.service.impl
{
    public class ProductService : ServiceAbs<Product, Int32>
    {
        public ProductService(string uri) : base(uri)
        {

        }
    }
}
