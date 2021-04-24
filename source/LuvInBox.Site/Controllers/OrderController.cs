using com.luvinbox.domain.dtos;
using com.luvinbox.domain.services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace LuvInBox.Site.Controllers {
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class OrderController : ControllerBase {
        public IOrderService _service { get; set; }

        public OrderController(IOrderService service) {
            _service = service;
        }

        [HttpPost]
        public async Task<ActionResult> Post(OrderDTO instance) {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try {
                var result = await _service.Post(instance);
                return Ok(result);
            } catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }       
    }
}
