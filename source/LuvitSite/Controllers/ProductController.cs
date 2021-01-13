using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using com.luvinbox.model;
using com.luvinbox.service;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace com.luvinbox.site.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IService<Product, int> _contactService;
        public ProductController(IService<Product, int> contactService)
        {
            _contactService = contactService;
        }

        // GET: api/<ProductController>
        [HttpGet]
        public async Task<IEnumerable<Product>> Get() => await _contactService.Get();

        // GET api/<ProductController>/5
        [HttpGet("{id}")]
        public async Task<Product> Get(int id) => await _contactService.Get(id);

        // POST api/<ProductController>
        [HttpPost]
        public async Task<IActionResult> Post(Product instance)
        {
            if (this.ModelState.IsValid)
            {
                await _contactService.Save(instance);
                return Ok(instance);
            }
            else
            {
                return BadRequest();
            }
        }

        // PUT api/<ProductController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Product instance)
        {
            if (this.ModelState.IsValid)
            {
                await _contactService.Save(instance);
                return Ok(instance);
            }
            else
            {
                return BadRequest();
            }
        }

        // DELETE api/<ProductController>/5
        [HttpDelete("{id}")]
        public async Task<Boolean> Delete(int id) => await _contactService.Delete(id);
    }
}
