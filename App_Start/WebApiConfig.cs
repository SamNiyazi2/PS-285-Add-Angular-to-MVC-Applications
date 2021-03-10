using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;


// 03/09/2021 06:05 pm - SSN - [20210309-1802] - [001] - M04-03 - Add WebApiConfig class


namespace PTC
{
    public static class WebApiConfig
    {

        public static void Register(HttpConfiguration config)
        {

            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
                );

        }

    }
}