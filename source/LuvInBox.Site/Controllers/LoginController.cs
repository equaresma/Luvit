﻿using com.luvinbox.domain.dtos;
using com.luvinbox.domain.services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace LuvInBox.Site.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILoginService _service;
        public LoginController(ILoginService service)
        {
            _service = service;
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<ActionResult> DoLogin(LoginDTO user)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var ret = await _service.FindByLogin(user);
                if (ret == null)
                    return NotFound(user);

                return Ok(ret);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [AllowAnonymous]
        [HttpPut]
        public async Task<ActionResult> ChangePass(string id, LoginDTO user)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var ret = await _service.Put(id, user);

                if (ret != null)
                    return Ok(ret);
                else
                    return NotFound(user);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}