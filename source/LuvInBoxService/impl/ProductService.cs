using com.luvinbox.model.registry;
using System;

namespace com.luvinbox.service.impl
{
    public class ProductService : ServiceAbs<Product, Int32>
    {
        public ProductService(string uri) : base(uri)
        {

        }
    }
}
