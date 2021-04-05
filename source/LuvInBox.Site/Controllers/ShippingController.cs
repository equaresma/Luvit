using com.luvinbox.domain.dtos;
using com.luvinbox.domain.services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace LuvInBox.Site.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class ShippingController : ControllerBase {
        public IShipingService _service { get; set; }
        public ShippingController(IShipingService service) {
            _service = service;
        }

        [HttpPost]
        public async Task<ActionResult> Post(ShippingDTO instance) {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try {
                var result = await _service.Calculate(instance);
                return Ok(result);
            } catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }
    }
}
