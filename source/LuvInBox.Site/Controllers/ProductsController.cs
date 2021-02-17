using com.luvinbox.domain.dtos;
using com.luvinbox.domain.services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace com.luvinbox.site.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        public IProductService _service { get; set; }
        public ProductsController(IProductService service)
        {
            _service = service;
        }

        // GET: api/<ProductController>
        [AllowAnonymous]
        [HttpGet]
        public async Task<IEnumerable<ProductDTO>> Get() => await _service.GetAll();

        // GET api/<ProductController>/5
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<ProductDTO> Get(string id) => await _service.Get(id);

        // POST api/<ProductController>
        [Authorize("Bearer")]
        [HttpPost]
        public async Task<IActionResult> Post(ProductDTO instance)
        {
            if (this.ModelState.IsValid)
            {
                await _service.Post(instance);
                return Ok(instance);
            }
            else
            {
                return BadRequest();
            }
        }

        // PUT api/<ProductController>/5
        [Authorize("Bearer")]
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, ProductDTO instance)
        {
            if (this.ModelState.IsValid)
            {
                await _service.Put(id, instance);
                return Ok(instance);
            }
            else
            {
                return BadRequest();
            }
        }

        // DELETE api/<ProductController>/5
        [Authorize("Bearer")]
        [HttpDelete("{id}")]
        public async Task<Boolean> Delete(string id) => await _service.Delete(id);
    }
}
