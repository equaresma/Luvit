﻿using com.luvinbox.model.enums;
using com.luvinbox.model.Properties;
using ExpressiveAnnotations.Attributes;
using System;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.model.compose
{
    public abstract class DocumentAbs : IDocument
    {
        private enumDocumentType __type;

        public DocumentAbs(enumDocumentType t)
        {
            __type = t;
        }
        public enumDocumentType Type { 
            get { return __type; } 
            protected set { __type = value; } 
        }

        [DataType(DataType.Text)]
        [Display(Name = "lblNumber", ResourceType = typeof(AppRes))]
        public virtual String Number { get; set; }

        [RequiredIf("Type == enumDocumentType.enumDocOthers")]
        [Display(Name = "lblName", ResourceType = typeof(AppRes))]
        public virtual String Name { get; set; }

        public override int GetHashCode()
        {
            return Number.GetHashCode();
        }
        public override bool Equals(object obj)
        {
            DocumentAbs doc = obj as DocumentAbs;
            if (doc == null)
                return false;

            return (Type == doc.Type && Number == doc.Number);
        }
    }
}