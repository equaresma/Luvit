using System.Collections.Generic;
using System.Threading.Tasks;
using com.luvit.model;
using com.luvit.repository.impl;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace com.luvIt.catalog.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VendorController : ControllerBase
    {
        private readonly VendorService _service;

        public VendorController(VendorService service)
        {
            _service = service;
        }

        // GET: api/<VendorController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vendor>>> Get() {
            try
            {
                return Ok(await _service.Get());
            }
            catch (System.Exception ex) 
            {
                return BadRequest(ex);   
            }        
        }

        // GET api/<VendorController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Vendor>> Get(string id)
        {            
            try
            {
                var vendor = await _service.Get(id);

                if (vendor == null)
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

        // POST api/<VendorController>
        [HttpPost]
        public async Task<ActionResult<Vendor>> Post(Vendor vendor)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(vendor.Id))
                    await _service.Create(vendor);
                else
                    await _service.Update(vendor.Id, vendor);

                return Ok(vendor);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // DELETE api/<VendorController>/5
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
