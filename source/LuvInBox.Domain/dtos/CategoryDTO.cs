using com.luvinbox.domain.compose;
using com.luvinbox.domain.Properties;
using System;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.domain.dtos {
    public class CategoryDTO : BaseDTO {
        [MaxLength(50)]
        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredName", ErrorMessageResourceType = typeof(AppRes))]
        public String Name {
            get; set;
        }

        public Image Image { get; set; }

        public bool IsActive { get; set; }

        public CategoryDTO() {
            Image = new Image();
        }

        public override String ToString() {
            return this.Name;
        }
    }
}
