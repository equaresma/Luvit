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
    public class CustomersController : ControllerBase
    {
        public ICustomerService _service { get; set; }
        public CustomersController(ICustomerService service)
        {
            _service = service;
        }

        // GET: api/<CustomerController>
        [Authorize("Bearer")]
        [HttpGet]
        public async Task<IEnumerable<CustomerDTO>> Get() => await _service.GetAll();

        // GET api/<CustomerController>/5
        [Authorize("Bearer")]
        [HttpGet("{id}")]
        public async Task<CustomerDTO> Get(string id) => await _service.Get(id);

        // POST api/<CustomerController>
       // [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Post(CustomerDTO instance)
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

        // PUT api/<CustomerController>/5
        [Authorize("Bearer")]
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, CustomerDTO instance)
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

        // DELETE api/<CustomerController>/5
        [Authorize("Bearer")]
        [HttpDelete("{id}")]
        public async Task<Boolean> Delete(string id) => await _service.Delete(id);
    }
}
