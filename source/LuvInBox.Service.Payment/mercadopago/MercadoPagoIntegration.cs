using com.luvinbox.domain.dtos;
using com.luvinbox.domain.services;
using MercadoPago.Client.Common;
using MercadoPago.Client.Preference;
using MercadoPago.Config;
using MercadoPago.Resource.Preference;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LuvInBox.Service.Payment.mercadopago {
    public class MercadoPagoIntegration : IPaymentIntegrationService {
        public MercadoPagoIntegration() {
            MercadoPagoConfig.AccessToken = "TEST-8952254687154924-040321-8ce5494fef79ba1da5da6196e6f7dd32-88138151";
        }

        public async Task<string> DoCheckOut(PaymentDTO payment) {
            var mpItems = new List<PreferenceItemRequest>();

            var payer = new PreferencePayerRequest {
                Name = payment.Customer.FirstName,
                Surname = payment.Customer.FamilyName,
                Email = payment.Customer.Email,
                Phone = new PhoneRequest {
                    Number = payment.Customer.Phone,
                }
            };

            Parallel.ForEach(payment.Items, item => {
                mpItems.Add(new PreferenceItemRequest {
                    Title = item.ProductName,
                    Quantity = item.Quantity,
                    CurrencyId = item.CurrencyId,
                    UnitPrice = item.UnityPrice
                });
            });

            var request = new PreferenceRequest {
                Payer = payer,
                Items = mpItems
            };

            // Cria a preferência usando o client
            var client = new PreferenceClient();
            Preference preference = await client.CreateAsync(request);
            return preference.Id;
        }
    }
}
