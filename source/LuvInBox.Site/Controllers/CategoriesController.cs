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
    public class CategoriesController : ControllerBase
    {
        public ICategoryService _service { get; set; }
        public CategoriesController(ICategoryService service)
        {
            _service = service;
        }

        // GET: api/<CategoryController>
        [Authorize("Bearer")]
        [HttpGet]
        public async Task<IEnumerable<CategoryDTO>> Get() => await _service.GetAll();

        // GET api/<CategoryController>/5
        [Authorize("Bearer")]
        [HttpGet("{id}")]
        public async Task<CategoryDTO> Get(string id) => await _service.Get(id);

        // POST api/<CategoryController>
       // [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Post(CategoryDTO instance)
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

        // PUT api/<CategoryController>/5
        [Authorize("Bearer")]
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, CategoryDTO instance)
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

        // DELETE api/<CategoryController>/5
        [Authorize("Bearer")]
        [HttpDelete("{id}")]
        public async Task<Boolean> Delete(string id) => await _service.Delete(id);
    }
}
