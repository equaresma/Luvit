using System;

namespace com.luvinbox.domain.entities
{
    [Serializable]
	public class OrderItem : BaseEntity
	{
		public String ProductId { get; set; }
		public String ProductName { get; set; }
		public String ProductDescription { get; set; }
		public Int32 Quantity { get; set; }
		public Decimal Price { get; set; }
		public String Tag { get; set; }

		public OrderItem()
		{
		
		}
	}
}
