using System;

namespace com.luvinbox.domain.entities
{
    [Serializable]
	public class OrderItem : BaseEntity	{
		public string VendorId { get; set; }
        public string ProductId { get; set; }
		public string ProductName { get; set; }
		public string ProductDescription { get; set; }
		public int Quantity { get; set; }
		public decimal Price { get; set; }
		public string Tag { get; set; }

		public OrderItem() { 
		
		}
	}
}
