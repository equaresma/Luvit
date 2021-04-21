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
            var payer = new PayerDTO();
            var cart = new List<OrderItemDTO>();

            cart.Add(new OrderItemDTO() {
                ProductName = "Teste Product",
                Quantity = 1,
                UnityPrice = 10.0m
            });

            payer.FirstName = "Eduardo";
            payer.FamilyName = "Quaresma";

            var payment = new PaymentDTO() {
                Payer = payer,
                Items = cart
            };

            var id = await service.DoCheckOut(payment);

            Assert.IsNotNull(id);
        }
    }
}
