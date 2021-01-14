using com.luvinbox.model.registry;
using com.luvinbox.service;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace com.luvinbox.site.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly IService<Customer, string> _contactService;
        public CustomerController(IService<Customer, string> contactService)
        {
            _contactService = contactService;
        }

        // GET: api/<CustomerController>
        [HttpGet]
        public async Task<IEnumerable<Customer>> Get() => await _contactService.Get();

        // GET api/<CustomerController>/5
        [HttpGet("{id}")]
        public async Task<Customer> Get(string id) => await _contactService.Get(id);

        // POST api/<CustomerController>
        [HttpPost]
        public async Task<IActionResult> Post(Customer instance)
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

        // PUT api/<CustomerController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Customer instance)
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

        // DELETE api/<CustomerController>/5
        [HttpDelete("{id}")]
        public async Task<Boolean> Delete(string id) => await _contactService.Delete(id);
    }
}
