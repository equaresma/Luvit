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
    public class VendorController : ControllerBase
    {
        private readonly IService<Vendor, string> _contactService;
        public VendorController(IService<Vendor, string> contactService)
        {
            _contactService = contactService;
        }

        // GET: api/<VendorController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                return Ok(await _contactService.Get());
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // GET api/<VendorController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            try
            {
                return Ok(await _contactService.Get(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // POST api/<VendorController>
        [HttpPost]
        public async Task<IActionResult> Post(Vendor instance)
        {
            if (this.ModelState.IsValid)
            {
                try
                {
                    await _contactService.Save(instance);
                    return Ok(instance);
                }
                catch (Exception ex)
                {
                    return BadRequest(ex);
                }
            }
            else
            {
                return BadRequest(this.ModelState);
            }
        }

        // DELETE api/<VendorController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            try
            {
                return Ok(await _contactService.Delete(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
