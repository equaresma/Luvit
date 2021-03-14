using com.luvinbox.domain.compose;
using com.luvinbox.domain.entities;
using System;

namespace com.luvinbox.domain.entities {
    public class Category : BaseEntity {
        public String Name {
            get; set;
        }
        public String Url { get; set; }
        public bool IsActive { get; set; }

        public Category() {
            IsActive = true;
        }
    }
}
