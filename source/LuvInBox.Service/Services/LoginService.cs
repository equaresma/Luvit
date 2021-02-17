using AutoMapper;
using com.luvinbox.domain.dtos;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.repository.interfaces.repository;
using com.luvinbox.domain.security;
using com.luvinbox.domain.services;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;

namespace LuvInBox.Service.Services
{
    public class LoginService : ILoginService
    {
        private readonly ILoginRepository _repository;
        private SigningConfigurations _signingConfigurations;
        private TokenConfigurations _tokenConfigurations;
        private IConfiguration _configuration;
        private readonly IMapper _mapper;

        public LoginService(ILoginRepository repository, SigningConfigurations signingConfigurations,
                            TokenConfigurations tokenConfigurations, IConfiguration configuration, IMapper mapper)
        {
            _repository = repository;
            _signingConfigurations = signingConfigurations;
            _tokenConfigurations = tokenConfigurations;
            _configuration = configuration;
        }
        public async Task<object> FindByLogin(LoginDTO login)
        {
            if (login != null && !String.IsNullOrWhiteSpace(login.Email))
            {
                var userEntity = await _repository.FindByLogin(login.Email);

                if (userEntity == null)
                {
                    return new
                    {
                        authenticated = false,
                        message = "Falha na autenticação"
                    };
                }
                else
                {
                    var identity = new ClaimsIdentity(
                        new GenericIdentity(userEntity.Name),
                        new[]
                        {
                            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                            new Claim(JwtRegisteredClaimNames.UniqueName, userEntity.Name)
                        }
                    );

                    DateTime created = DateTime.Now;
                    DateTime expiration = created + TimeSpan.FromSeconds(_tokenConfigurations.Seconds);

                    var handler = new JwtSecurityTokenHandler();
                    var token = CreateToken(identity, created, expiration, handler);
                    return SuccessObject(created, expiration, token, login);

                }
            }
            else
            {
                return new
                {
                    authenticated = false,
                    message = "Falha na autenticação"
                };
            }
        }

        public async Task<LoginDTO> Put(string id, LoginDTO login)
        {
            var entity = _mapper.Map<Login>(login);
            var ret = await _repository.Update(id, entity);
            return _mapper.Map<LoginDTO>(ret);
        }

        private string CreateToken(ClaimsIdentity identity, DateTime create, DateTime exp, JwtSecurityTokenHandler handler)
        {
            var securityToken = handler.CreateJwtSecurityToken(new SecurityTokenDescriptor
            {
                Issuer = _tokenConfigurations.Issuer,
                Audience = _tokenConfigurations.Audience,
                SigningCredentials = _signingConfigurations.SigningCredentials,
                Subject = identity,
                NotBefore = create,
                Expires = exp

            });

            var token = handler.WriteToken(securityToken);
            return token;
        }
        private object SuccessObject(DateTime create, DateTime exp, string token, LoginDTO dto)
        {
            return new
            {
                authenticated = true,
                created = create.ToString("yyyy-MM-dd HH:mm:ss"),
                expiration = exp.ToString("yyyy-MM-dd HH:mm:ss"),
                accessToken = token,
                userName = dto.Email,
                message = "Usuário Logado"
            };

        }        
    }
}
