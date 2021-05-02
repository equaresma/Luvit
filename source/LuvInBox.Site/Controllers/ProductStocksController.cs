using com.luvinbox.domain.dtos;
using com.luvinbox.domain.services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace com.luvinbox.site.Controllers {
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ProductStocksController : ControllerBase {
        public IProductStockService _service { get; set; }
        public ProductStocksController(IProductStockService service) {
            _service = service;
        }

        // GET api/<ProductController>/5
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<ProductStockDTO> Get(string id) => await _service.Get(id);

        [Authorize("Bearer")]
        [HttpGet("{id}")]
        public async Task<IEnumerable<ProductStockDTO>> GetByVendor(string id) => await _service.FindByVendor(id);

        // POST api/<ProductController>
        [Authorize("Bearer")]
        [HttpPost]
        public async Task<IActionResult> Post(ProductStockDTO instance) {
            if (this.ModelState.IsValid) {
                await _service.Post(instance);
                return Ok(instance);
            } else {
                return BadRequest();
            }
        }

        // PUT api/<ProductController>/5
        [Authorize("Bearer")]
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, ProductStockDTO instance) {
            if (this.ModelState.IsValid) {
                await _service.Put(id, instance);
                return Ok(instance);
            } else {
                return BadRequest();
            }
        }

        // DELETE api/<ProductController>/5
        [Authorize("Bearer")]
        [HttpDelete("{id}")]
        public async Task<Boolean> Delete(string id) => await _service.Delete(id);
    }
}
