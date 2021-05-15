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

        public PaymentController(IPaymentService service) {
            _service = service;
        }

        [HttpPost]
        public async Task<ActionResult> Post(PaymentDTO payment) {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try {
                var result = await _service.DoCheckOut(payment);
                return Ok(result);
            } catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }
    }
}
