using com.luvinbox.domain.interfaces;
using com.luvinbox.domain.services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
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
        public async Task<ActionResult> Post(ICustomer customer, IEnumerable<IOrderItem> items) {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try {
                var result = await _service.DoCheckOut(customer, items);
                return Ok(result);
            } catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }
    }
}
