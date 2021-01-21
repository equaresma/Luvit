using com.luvinbox.model.registry;
using com.luvinbox.service;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace com.luvinbox.site.Controllers
{
    [Route("api/vendor")]
    [ApiController]
    public class VendorController : ControllerBase
    {
        private readonly IService<Vendor, string> _contactService;
        public VendorController(IService<Vendor, string> contactService)
        {
            _contactService = contactService;
        }

        // GET: api/vendor
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                return Ok(await _contactService.Get());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/vendor/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            try
            {
                return Ok(await _contactService.Get(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message) ;
            }
        }

        // POST api/vendor
        [HttpPost]
        public async Task<ActionResult<Vendor>> Post(Vendor instance)
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
                    return BadRequest(ex.Message);
                }
            }
            else
            {
                return BadRequest(this.ModelState);
            }
        }

        // DELETE api/vendor/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            try
            {
                return Ok(await _contactService.Delete(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
