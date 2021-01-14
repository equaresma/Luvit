using System;

namespace com.luvinbox.model
{
    public interface IEntity<K>
    {
        K Id { get; set; }
        DateTime Created { get; set; }
        String Creator { get; set; }
        DateTime LastUpdate { get; set; }
        String UserLastUpdate { get; set; }
    }
}
