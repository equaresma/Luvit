using com.luvinbox.domain.dtos;
using com.luvinbox.domain.services;
using Dasync.Collections;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LuvInBox.Site.Controllers {
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ShippingController : ControllerBase {
        public IShippingService _service { get; set; }
        public ShippingController(IShippingService service) {
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

        [HttpPost]
        public async Task<ActionResult> CalculateCart(IEnumerable<ShippingDTO> cart) {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try {
                var list = new ConcurrentBag<ShippingDTO>(cart);

                await cart.ParallelForEachAsync(async item => {
                    var ret = await _service.Calculate(item);
                    var shp = list.Where(c=> c.ProductId == ret.ProductId).FirstOrDefault();

                    shp.Value = ret.Shipping;
                    shp.Deadline = ret.Deadline;

                }, maxDegreeOfParallelism: 4);

                return Ok(list);

            } catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }
    }
}
