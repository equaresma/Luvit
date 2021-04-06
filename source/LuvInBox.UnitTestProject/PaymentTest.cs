using System.Collections.Generic;
using System.Threading.Tasks;
using com.luvinbox.domain.dtos;
using com.luvinbox.service.services;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace LuvInBox.UnitTestProject {
    [TestClass]
    public class PaymentTest {
        [TestMethod]
        public async Task Checkout() {
            var service = new PaymentService();
            var customer = new CustomerDTO();
            var cart = new List<OrderItemDTO>();

            cart.Add(new OrderItemDTO() {
                ProductName = "Teste Product",
                Quantity = 1,
                UnityPrice = 10.0m
            });

            customer.FirstName = "Eguargo";
            customer.FamilyName = "Guararesmas";
      
            var id = await service.DoCheckOut(customer, cart);

            Assert.IsNotNull(id);
        }
    }
}
