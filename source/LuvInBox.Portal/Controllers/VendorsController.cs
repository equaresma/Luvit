using com.luvinbox.domain.dtos;
using com.luvinbox.domain.services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace com.luvinbox.site.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class VendorsController : ControllerBase {
        public IVendorService _service { get; set; }
        public VendorsController(IVendorService service) {
            _service = service;
        }

        // GET: api/vendor
        [Authorize("Bearer")]
        [HttpGet]
        public async Task<IActionResult> Get() {
            try {
                return Ok(await _service.GetAll());
            } catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }

        // GET api/vendor/5
        [Authorize("Bearer")]
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id) {
            try {
                return Ok(await _service.Get(id));
            } catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }

        // POST api/vendor
        [AllowAnonymous]
        [HttpPost]
        public async Task<ActionResult<VendorDTO>> Post(VendorDTO instance) {
            if (this.ModelState.IsValid) {
                try {
                    await _service.Post(instance);
                    return Ok(instance);
                } catch (Exception ex) {
                    return BadRequest(ex.Message);
                }
            } else {
                return BadRequest(this.ModelState);
            }
        }
    }
}
