using com.luvinbox.domain.dtos;
using com.luvinbox.domain.services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace LuvInBox.Site.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class SizesController : ControllerBase {
        private readonly ISizeService _service;

        public SizesController(ISizeService service) {
            _service = service;
        }
        //TODO: Bloquear
        //[Authorize("Bearer")]
        [HttpGet]
        public async Task<ActionResult> GetAll() => Ok(await _service.GetAll());

        [Authorize("Bearer")]
        [HttpGet("{id}")]
        public async Task<ActionResult> Get(string id) => Ok(await _service.Get(id));

        [Authorize("Bearer")]
        [HttpPost]
        public async Task<ActionResult> Post(SizeDTO Size) {
            try {
                var result = await _service.Post(Size);
                return Ok(result);
            } catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }

        [Authorize("Bearer")]
        [HttpPut]
        public async Task<ActionResult> Put(string id, SizeDTO Size) {
            try {
                var result = await _service.Put(id, Size);
                return Ok(result);
            } catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }

        [Authorize("Bearer")]
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string id) => Ok(await _service.Delete(id));

    }
}
