using AutoMapper;
using com.luvinbox.domain.dtos;
using com.luvinbox.domain.entities;
using com.luvinbox.domain.enums;
using com.luvinbox.domain.interfaces.repository;
using com.luvinbox.domain.security;
using com.luvinbox.domain.services;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;

namespace com.luvinbox.service.services {
    public class LoginService : ILoginService {
        private readonly ILoginRepository _repository;
        private readonly IUserRepository _userRepository;
        private SigningConfigurations _signingConfigurations;
        private TokenConfigurations _tokenConfigurations;
        private readonly IMapper _mapper;

        public LoginService(ILoginRepository repository, IUserRepository userRepository, SigningConfigurations signingConfigurations,
                            TokenConfigurations tokenConfigurations, IMapper mapper) {
            _repository = repository;
            _userRepository = userRepository;
            _signingConfigurations = signingConfigurations;
            _tokenConfigurations = tokenConfigurations;
            _mapper = mapper;
        }
        public async Task<AuthDTO> FindByLogin(LoginDTO login) {
            if (login != null && !String.IsNullOrWhiteSpace(login.Name)) {
                var userEntity = await _userRepository.FindByLogin(login.Name);
                var loginEntity = await _repository.FindLastLogin(login.Name);

                if (loginEntity != null) {
                    if (loginEntity.IsActive && loginEntity.RemoteAddress != login.RemoteAddress)
                        return UnsuccessObject($"{login.Name} is already logged");
                    //verify expiration
                    if (loginEntity.Expiration <= DateTime.UtcNow && loginEntity.IsActive) {
                        //Finaliza o último login pendente
                        loginEntity.LastUpdate = DateTime.UtcNow;
                        loginEntity.IsActive = false;
                        await _repository.Update(loginEntity.Id, loginEntity);
                        return UnsuccessObject("Token expired");
                    }

                    return await CreateIdentity(login, userEntity);
                }

                if (userEntity == null) {
                    return UnsuccessObject("Falha na autenticação");
                } else {
                    return await CreateIdentity(login, userEntity);
                }
            } else {
                return UnsuccessObject("Falha na autenticação");
            }
        }
        public async Task<LoginDTO> Put(string id, LoginDTO login) {
            var entity = _mapper.Map<Login>(login);
            var ret = await _repository.Update(id, entity);
            return _mapper.Map<LoginDTO>(ret);
        }
        public async Task<bool> Logoff(string username) {
            var loginEntity = await _repository.FindLastLogin(username);

            if (loginEntity == null)
                return false;

            loginEntity.IsActive = false;
            await _repository.Update(loginEntity.Id, loginEntity);
            return true;
        }

        private string CreateToken(ClaimsIdentity identity, DateTime create, DateTime exp, JwtSecurityTokenHandler handler) {
            var securityToken = handler.CreateJwtSecurityToken(new SecurityTokenDescriptor {
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
        private AuthDTO SuccessObject(DateTime create, DateTime exp, string token, LoginDTO dto, enumUserType type) {
            return new AuthDTO() {
                Authenticated = true,
                Created = create,
                Expiration = exp,
                AccessToken = token,
                Username = dto.Name,                
                Message = "Usuário Logado",
                UserType = type
            };
        }
        private AuthDTO UnsuccessObject(string message) {
            return new AuthDTO() {
                Authenticated = false,
                Message = message,
            };
        }
        private async Task<AuthDTO> CreateIdentity(LoginDTO login, User userEntity) {
            var identity = new ClaimsIdentity(
                                new GenericIdentity(userEntity.Name),
                                new[]
                                {
                                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                                    new Claim(JwtRegisteredClaimNames.UniqueName, userEntity.Name)
                                });

            DateTime created = DateTime.Now;
            DateTime expiration = created + TimeSpan.FromSeconds(_tokenConfigurations.Seconds);

            var handler = new JwtSecurityTokenHandler();
            var token = CreateToken(identity, created, expiration, handler);
            var entity = _mapper.Map<Login>(login);

            entity.Token = token;
            entity.Expiration = expiration;

            await _repository.Create(entity);

            return SuccessObject(created, expiration, token, login, userEntity.Type);
        }
    }
}
