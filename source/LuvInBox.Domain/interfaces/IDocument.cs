using com.luvinbox.domain.enums;

namespace com.luvinbox.domain.interfaces {
    public interface IDocument {
        string Name { get; set; }
        string Number { get; set; }
        enumDocumentType Type { get; }
    }
}