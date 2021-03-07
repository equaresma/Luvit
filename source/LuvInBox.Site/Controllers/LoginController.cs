using com.luvinbox.domain.dtos;
using com.luvinbox.domain.services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace LuvInBox.Site.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase {
        private readonly ILoginService _service;
        public LoginController(ILoginService service) {
            _service = service;
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<ActionResult> DoLogin(LoginDTO user) {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try {
                int tries = 0;

            FindLogin:
                var ret = await _service.FindByLogin(user);
                if (ret == null)
                    return NotFound(user);

                if (tries == 0 && !ret.Authenticated && ret.Message.Contains("Token expired", StringComparison.InvariantCultureIgnoreCase)){
                    tries++;
                    goto FindLogin;
                }

                return Ok(ret);
            } catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }

        [AllowAnonymous]
        [HttpPut]
        public async Task<ActionResult> ChangePass(string id, LoginDTO user) {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try {
                var ret = await _service.Put(id, user);

                if (ret != null)
                    return Ok(ret);
                else
                    return NotFound(user);
            } catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        public async Task<ActionResult> Logoff(string username) {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try {
                var ret = await _service.Logoff(username);

                if (ret)
                    return Ok(ret);
                else
                    return NotFound(username);
            } catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }
    }
}
