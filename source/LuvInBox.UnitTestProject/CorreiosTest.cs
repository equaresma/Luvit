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
                ZipCodeOrigin = "70002900",
                ZipCodeDestiny = "04547000",
                Dimension = new com.luvinbox.domain.compose.Dimensions() { 
                     Weigth =1,
                     Length =20,
                     Height =20,
                     Width =20
                }
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
