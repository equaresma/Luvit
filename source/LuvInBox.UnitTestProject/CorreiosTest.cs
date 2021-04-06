using System.Threading.Tasks;
using com.luvinbox.domain.dtos;
using com.luvinbox.service.services;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace LuvInBox.UnitTestProject {
    [TestClass]
    public class CorreiosTest {
        [TestMethod]
        public async Task CalcularFrete() {
            var service = new ShippingService();
            var shipping = new ShippingDTO()
            {
                ZipCodeOrigin = "02558010",
                ZipCodeDestiny = "11700300"
            };

            var delivery = await service.Calculate(shipping);

            if (delivery != null)
            {
                Assert.IsTrue(delivery.Deadline > 0);
                Assert.IsTrue(delivery.Shipping > 0);
            }
        }
    }
}
