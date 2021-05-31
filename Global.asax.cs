using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Reflection;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace PTC
{
    public class MvcApplication : System.Web.HttpApplication
    {
        public static string APPLICATION_VERSION_NO;

        protected void Application_Start()
        {
            APPLICATION_VERSION_NO = Assembly.GetExecutingAssembly().GetName().Version.ToString(4);

            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);


            // 03/09/2021 06:12 pm - SSN - [20210309-1810] - [001] - M04-04 - Configure global.asax
            // Must be called before RouteConfig.RegisterRoutes

            GlobalConfiguration.Configure(WebApiConfig.Register);


            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);


            // 03/09/2021 06:15 pm - SSN - [20210309-1810] - [002] - M04-04 - Configure global.asax

            HttpConfiguration config = GlobalConfiguration.Configuration;

            config.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;

            var jsonFormatter = config.Formatters.OfType<JsonMediaTypeFormatter>().FirstOrDefault();

            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();



        }
    }
}
