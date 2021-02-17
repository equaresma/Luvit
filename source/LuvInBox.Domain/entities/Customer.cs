using com.luvinbox.domain.compose;
using com.luvinbox.domain.enums;
using System;

namespace com.luvinbox.domain.entities
{
    [Serializable]
    public class Customer : Person
    {
        public enumGender Gender { get; set; }
        public enumMaritalStatus MaritalStatus { get; set; }
        public enumDegree Degree { get; set; }
        public Login Login { get; set; }
        public override IDocument Document { get; set; }

        public Customer()
        {
            Document = new CustomerDocument();
            Address = new Address();
        }
    }
}
