using com.luvinbox.domain.Properties;
using System;
using System.Collections.Generic;
using System.Resources;
using System.Runtime.Serialization;
using System.Text;

namespace com.luvinbox.domain.exceptions {
    public class BusinessException : Exception {
        public BusinessException(string message) : base(GetFromAppRes(message)) {
            
        }

        public BusinessException(string message, Exception innerException) : base(GetFromAppRes(message), innerException) {

        }

        protected BusinessException(SerializationInfo info, StreamingContext context) : base(info, context) {

        }


        private static String GetFromAppRes(String value) {
            ResourceManager rm = new ResourceManager(typeof(AppRes));
            try {
                return rm.GetString(value);
            } catch {
                return value;
            }
        }
    }
}
