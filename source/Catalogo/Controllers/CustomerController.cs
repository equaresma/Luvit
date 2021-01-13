using System.Collections.Generic;
using System.Threading.Tasks;
using com.luvinbox.model;
using com.luvinbox.repository.impl;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace com.luvinbox.catalog.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly CustomerService _service;

        public CustomerController(CustomerService service)
        {
            _service = service;
        }

        // GET: api/<CustomerController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customer>>> Get() {
            try
            {
                return Ok(await _service.Get());
            }
            catch (System.Exception ex) 
            {
                return BadRequest(ex);   
            }        
        }

        // GET api/<CustomerController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Customer>> Get(string id)
        {            
            try
            {
                var customer = await _service.Get(id);

                if (customer == null)
                {
                    return NotFound();
                }

                return Ok(await _service.Get());
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // POST api/<CustomerController>
        [HttpPost]
        public async Task<ActionResult<Customer>> Post(Customer customer)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(customer.Id))
                    await _service.Create(customer);
                else
                    await _service.Update(customer.Id, customer);

                return Ok(customer);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // DELETE api/<CustomerController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            try
            {
                await _service.Remove(id);
                return Ok();
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
            }
        }    
    }
}
