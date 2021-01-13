using System;
using System.Collections.Generic;
using System.Text;

namespace com.luvinbox.model
{
    public interface IEntity<K>
    {
        K Id { get; set; }
    }
}
