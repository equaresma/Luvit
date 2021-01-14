using com.luvinbox.model.registry;
using com.luvinbox.repository.impl;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace com.luvinbox.catalog.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ProductService _service;

        public ProductController(ProductService service)
        {
            _service = service;
        }

        // GET: api/<ProductController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> Get()
        {
            try
            {
                return Ok(await _service.Get());
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // GET api/<ProductController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> Get(int id)
        {
            try
            {
                var product = await _service.Get(id);

                if (product == null)
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

        // POST api/<ProductController>
        [HttpPost]
        public async Task<ActionResult<Product>> Post(Product product)
        {
            try
            {
                if (product.Id == 0)
                    await _service.Create(product);
                else
                    await _service.Update(product.Id, product);

                return Ok(product);
            }
            catch (System.Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // DELETE api/<ProductController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
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
