using System;
using System.Collections.Generic;
using System.Text;

namespace com.luvit.model
{
    public interface IEntity<K>
    {
        K Id { get; set; }
    }
}
