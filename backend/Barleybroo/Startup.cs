using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Microsoft.Owin.Security.OAuth;
using Microsoft.Owin.Cors;
using Owin;
using Barleybroo.Models;
using Barleybroo.Providers;
using System.Web.Http;
using System.Net.Http.Formatting;
using Newtonsoft.Json.Serialization;
using System.Web.Cors;
using System.Threading.Tasks;

[assembly: OwinStartup(typeof(Barleybroo.Startup))]

namespace Barleybroo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {

            app.UseCors(CorsOptions.AllowAll);
            //app.UseCors(corsop);
            //ConfigureOAuthTokenGeneration(app);
            ConfigureAuth(app);
            
        }
        private void ConfigureOAuthTokenGeneration(IAppBuilder app)
        {
            app.CreatePerOwinContext(ApplicationDbContext.Create);
            //app.CreatePerOwinContext<ApplicationUserManager>(ApplicationUserManager.Create);
            OAuthAuthorizationServerOptions OAuthServerOptions = new OAuthAuthorizationServerOptions()
            {
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/token"),
                AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(1440),
                //Temporarily use null publicClientId
                Provider = new ApplicationOAuthProvider("")
            };
            app.UseOAuthAuthorizationServer(OAuthServerOptions);
        }
        private void ConfigureWebApi(HttpConfiguration config)
        {
            config.MapHttpAttributeRoutes();

            var jsonFormatter = config.Formatters.OfType<JsonMediaTypeFormatter>().First();
            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
        }
    }
}
