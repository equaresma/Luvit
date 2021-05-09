using com.luvinbox.domain.compose;
using com.luvinbox.domain.enums;
using System;

namespace com.luvinbox.domain.entities {
    [Serializable]
    public class Customer : Person {
        public enumGender Gender { get; set; }
        public enumMaritalStatus MaritalStatus { get; set; }
        public enumDegree Degree { get; set; }
        public string Nickname { get; set; }
        public bool IsPublic { get; set; }

        public Customer() {
            Address = new Address();
        }
    }
}
