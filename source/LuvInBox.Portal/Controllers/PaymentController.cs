using com.luvinbox.domain.compose;
using com.luvinbox.domain.dtos;
using com.luvinbox.domain.services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace LuvInBox.Site.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase {
        private readonly IPaymentService _service;
        private readonly IOrderService _serviceOrder;

        public PaymentController(IPaymentService service, IOrderService serviceOrder) {
            _service = service;
            _serviceOrder = serviceOrder;
        }

        [HttpPost]
        public async Task<ActionResult> Post(PaymentDTO payment) {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try {                
                var result = await _service.DoCheckOut(payment);
                var order = new OrderDTO() {
                    Items = payment.Items,
                    Position = DateTime.UtcNow,
                    CustomerId = payment.Payer?.Id,
                    CustomerName = $"{payment.Payer?.FamilyName} / {payment.Payer?.FirstName}",
                    Payment = new PaymentInfo() { 
                        PaymentId = result
                    }
                };

                await _serviceOrder.Post(order);
                return Ok(result);

            } catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }
    }
}
