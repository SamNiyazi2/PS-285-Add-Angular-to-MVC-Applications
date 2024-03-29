﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace PTC
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                               name: "angularRoute",
                               url: "src/{*url}",
                               defaults: new { controller = "src", action = "product_ang" } // The view that bootstraps Angular 5
                           );


            routes.MapRoute(
                              name: "Default",
                              url: "{controller}/{action}/{id}",
                              defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
                          );



        }
    }
}
