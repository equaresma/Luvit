using com.luvinbox.domain.compose;
using System;

namespace com.luvinbox.domain.dtos {
    public class ShippingDTO : ICloneable {
        public string ZipCodeOrigin { get; set; }
        public string ZipCodeDestiny { get; set; }
        public Dimensions Dimension { get; set; }
        public short Deadline { get; set; }
        public decimal Value { get; set; }

        public ShippingDTO() {
            Dimension = new Dimensions();
        }

        public object Clone() {
            var newObj = this.MemberwiseClone();
            ((ShippingDTO)newObj).Dimension = this.Dimension.Clone() as Dimensions;
            return newObj;
        }
    }
}
