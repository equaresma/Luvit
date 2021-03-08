namespace com.luvinbox.domain.compose {
    public class Image {
        private const string _DEF_PATH = "~/images/blank.png";
        public ImageType Type { get; set; }

        public string Value { get; set; }

        public Image() {
            Type = ImageType.enumImageTypeURL;
            Value = _DEF_PATH;
        }

        public Image(ImageType tp) {
            Type = tp;
            Value = _DEF_PATH;
        }

        public Image(ImageType tp, string value) {
            Type = tp;
            Value = value;
        }

        public enum ImageType : byte {
            enumImageTypeURL = 0,
            enumImageTypeBase64 = 1
        }
    }
}
