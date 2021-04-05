using System;

namespace com.luvinbox.domain.compose
{
    public class Dimensions : ICloneable
    {
        //largura
        public Double Width { get; set; }
        //altura
        public Double Height { get; set; }
        //comprimento
        public Double Length { get; set; }
        //peso em kilos
        public Double Weigth { get; set; }

        public object Clone() {
            return this.MemberwiseClone();
        }
    }
}
