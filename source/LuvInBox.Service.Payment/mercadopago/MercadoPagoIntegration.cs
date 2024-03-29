﻿using com.luvinbox.domain.dtos;
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
            //Gabi´s Account
            MercadoPagoConfig.AccessToken = "TEST-127673018143137-030610-6d644bc7598d0c713fa7378273df0bf8-723603213";
        }

        public async Task<string> DoCheckOut(PaymentDTO payment) {
            PreferencePayerRequest payer = null;
            var mpItems = new List<PreferenceItemRequest>();

            if (payment.Payer != null) {
                payer = new PreferencePayerRequest {
                    Name = payment.Payer.FirstName,
                    Surname = payment.Payer.FamilyName,
                    Email = payment.Payer.Email,
                    Phone = new PhoneRequest {
                        Number = payment.Payer.Phone,
                    }
                };
            }

            Parallel.ForEach(payment.Items, item => {
                mpItems.Add(new PreferenceItemRequest {
                    Title = item.ProductName,
                    Quantity = item.Quantity,
                    CurrencyId = item.CurrencyId,
                    UnitPrice = item.Price
                }); ;
            });

            var request = new PreferenceRequest {
                Items = mpItems,
                BackUrls = new PreferenceBackUrlsRequest {
                    Success = "https://localhost:44345/payment/success",
                    Failure = "https://localhost:44345/payment/failure",
                    Pending = "https://localhost:44345/payment/pendings",
                },
                AutoReturn = "approved",
            };

            if (payment.Payer != null)
                request.Payer = payer;

            // Cria a preferência usando o client
            var client = new PreferenceClient();
            Preference preference = await client.CreateAsync(request);
            return preference.Id;
        }
    }
}
