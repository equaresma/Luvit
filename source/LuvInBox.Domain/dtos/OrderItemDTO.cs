using com.luvinbox.domain.Properties;
using System;
using System.ComponentModel.DataAnnotations;

namespace com.luvinbox.domain.dtos
{
    [Serializable]
	public class OrderItemDTO : BaseDTO
	{
		public String ProductId { get; set; }

		[Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredName", ErrorMessageResourceType = typeof(AppRes))]
		[Display(Name = "lblProduct", ResourceType = typeof(AppRes))]
		public String ProductName { get; set; }

		[Required(AllowEmptyStrings = false, ErrorMessageResourceName = "RequiredDescription", ErrorMessageResourceType = typeof(AppRes))]
		[Display(Name = "lblDescription", ResourceType = typeof(AppRes))]
		public String ProductDescription { get; set; }

		[Display(Name = "lblPrice", ResourceType = typeof(AppRes))]
		public Int32 Quantity { get; set; }

		[DataType(DataType.Currency)]
		[Display(Name = "lblPrice", ResourceType = typeof(AppRes))]
		public Decimal Price { get; set; }

		public String Tag { get; set; }

		public OrderItemDTO()
		{
		}
		
	}
}
