﻿using com.luvinbox.domain.compose;
using com.luvinbox.domain.enums;
using com.luvinbox.domain.Properties;
using System;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.domain.dtos {
    [Serializable]
    public abstract class PersonDTO : BaseDTO {
        [MaxLength(40)]
        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredFamilyName", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Text)]
        [Display(Name = "lblFamilyName", ResourceType = typeof(AppRes))]
        public string FamilyName { get; set; }

        [MaxLength(40)]
        [DataType(DataType.Text)]
        [Display(Name = "lblMiddleName", ResourceType = typeof(AppRes))]
        public string MiddleName { get; set; }

        [MaxLength(20)]
        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredName", ErrorMessageResourceType = typeof(AppRes))]
        [DataType(DataType.Text)]
        [Display(Name = "lblFirstName", ResourceType = typeof(AppRes))]
        public string FirstName { get; set; }

        [DataType(DataType.Date)]
        [Display(Name = "lblBirthday", ResourceType = typeof(AppRes))]
        public DateTime Birthday { get; set; }
        [Required]
        public enumDocumentType DocumentType { get; set; }

        [MaxLength(30)]
        [Display(Name = "lblDocumentNumber", ResourceType = typeof(AppRes))]
        public String DocumentNumber { get; set; }

        [Display(Name = "lblAddress", ResourceType = typeof(AppRes))]
        public virtual Address Address { get; set; }

        public virtual SocialMedia SocialNetwork { get; set; }

        [MaxLength(20)]
        [Display(Name = "lblPhoneNumber", ResourceType = typeof(AppRes))]
        [DataType(DataType.PhoneNumber)]
        public String Phone { get; set; }

        [MaxLength(20)]
        [DataType(DataType.PhoneNumber)]
        [Display(Name = "lblMobileNumber", ResourceType = typeof(AppRes))]
        public String Mobile { get; set; }

        [MaxLength(150)]
        [Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredEmail", ErrorMessageResourceType = typeof(AppRes))]
        [Display(Name = "lblEmail", ResourceType = typeof(AppRes))]
        [EmailAddress(ErrorMessageResourceName = "RequiredEmail", ErrorMessageResourceType = typeof(AppRes))]
        public string Email { get; set; }

        public PersonDTO() {
            Address = new Address();
            SocialNetwork = new SocialMedia();
        }

        public override String ToString() {
            return String.Format("{0} {1} {2}", FirstName, MiddleName, FamilyName);
        }
    }
}
