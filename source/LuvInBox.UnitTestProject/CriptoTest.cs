using com.luvinbox.domain.security;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace LuvInBox.UnitTestProject {
    [TestClass]
    public class CriptoTest {
        [TestMethod]
        public void CryptoTest() {

            var test = "@SenhaParaTeste1234";
            var salt = Guid.NewGuid().ToString();
            var encripted = RijndaelManagedEncryption.EncryptRijndael(test, salt);
            var decripted = RijndaelManagedEncryption.DecryptRijndael(encripted, salt);

            Assert.AreEqual(test, decripted);
        }
    }
}
