using com.luvinbox.model.enums;
using System;

namespace com.luvinbox.model.compose
{
    public class Document { 
        public enumDocumentType Type { get; set; }
        public String Number { get; set; }

        public override int GetHashCode()
        {
            return Number.GetHashCode();
        }
        public override bool Equals(object obj)
        {
            Document doc = obj as Document;
            if (doc == null)
                return false;

            return (Type == doc.Type && Number == doc.Number);
        }
    }
}
