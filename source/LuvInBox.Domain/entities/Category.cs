using com.luvinbox.domain.compose;
using com.luvinbox.domain.entities;
using System;

namespace com.luvinbox.domain.entity {
    public class Category : BaseEntity {
        public String Name {
            get; set;
        }
        public Image Image { get; set; }
        public bool IsActive { get; set; }

        public Category() {
        }
    }
}
