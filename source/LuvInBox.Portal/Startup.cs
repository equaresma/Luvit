using AutoMapper;
using com.luvinbox.domain.dtos;
using com.luvinbox.domain.interfaces.repository;
using com.luvinbox.domain.security;
using com.luvinbox.infra.dependencyinjection;
using com.luvinbox.infra.mapping;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;

namespace LuvInBox.Site {
    public class Startup {
        public Startup(IConfiguration configuration) {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services) {
            services.Configure<IRepositorySettings>(Configuration.GetSection(nameof(RepositorySettingsDTO)));
            services.Configure<RepositorySettingsDTO>(Configuration.GetSection(nameof(RepositorySettingsDTO)));
            services.AddSingleton<IRepositorySettings>(sp => sp.GetRequiredService<IOptions<RepositorySettingsDTO>>().Value);

            ConfigureService.ConfigureDependenciesService(services);
            ConfigureRepository.ConfigureDependenciesService(services, Configuration);

            var mapperCfg = new MapperConfiguration(c => {
                c.AddProfile(new DtoToEntityProfile());
            });

            IMapper mapper = mapperCfg.CreateMapper();

            services.AddSingleton(mapper);

            var signingConfigurations = new SigningConfigurations();
            services.AddSingleton(signingConfigurations);

            var tokenConfigurations = new TokenConfigurations();
            new ConfigureFromConfigurationOptions<TokenConfigurations>(Configuration.GetSection(nameof(TokenConfigurations))).Configure(tokenConfigurations);
            services.AddSingleton(tokenConfigurations);

            services.AddAuthentication(authOoptions => {
                authOoptions.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                authOoptions.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(bearerOptions => {
                var paramsValidation = bearerOptions.TokenValidationParameters;
                paramsValidation.IssuerSigningKey = signingConfigurations.Key;
                paramsValidation.ValidAudience = tokenConfigurations.Audience;
                paramsValidation.ValidIssuer = tokenConfigurations.Issuer;
                paramsValidation.ValidateIssuerSigningKey = true;
                paramsValidation.ValidateLifetime = true;
                paramsValidation.ClockSkew = TimeSpan.Zero;
            });

            services.AddAuthorization(auth => {
                auth.AddPolicy("Bearer", new AuthorizationPolicyBuilder()
                .AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme)
                .RequireAuthenticatedUser().Build());
            });

            services.AddControllers().AddNewtonsoftJson();
            services.AddSwaggerGen(c => {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Luv In Box Web Plataform", Version = "v1" });
                c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme() {
                    Description = "Enter JWT Token",
                    Name = "Authorization",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.ApiKey
                });

                c.AddSecurityRequirement(new OpenApiSecurityRequirement {
                    {
                        new OpenApiSecurityScheme {
                            Reference = new OpenApiReference {
                                Id = "Bearer",
                                Type = ReferenceType.SecurityScheme
                            }
                        }, new List<string>()
                    }
                });
            });

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration => {
                configuration.RootPath = "ClientApp/build";
            });
            //var/aspnetcore/publish/ClientApp/build
            //services.AddSpaStaticFiles(configuration => {
            //    configuration.RootPath = "/home/site/wwwroot/ClientApp/build";
            //});

            //services.AddCors(options =>
            //{
            //    options.AddPolicy(name: "ViaCepPolicy",
            //                      builder =>
            //                      {
            //                          builder.WithOrigins("https://viacep.com.br", "http://viacep.com.br")
            //                                      .WithMethods("GET","POST");
            //                      });
            //});
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env) {
            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            }

            app.UseSwagger();
            app.UseSwaggerUI(c => {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Site v1");
                c.RoutePrefix = "apidoc";
            });

            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseSpaStaticFiles();

            //app.UseCors();
            app.UseAuthorization();

            app.UseEndpoints(endpoints => {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa => {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment()) {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}
