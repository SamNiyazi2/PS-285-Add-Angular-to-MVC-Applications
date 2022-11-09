using PTC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PTC.Controllers
{
    // 05/29/2021 12:21 am - SSN - [20210528-1458] - [006] - Angular validations - New product
    // Addresses issue with calling "src" only.  Angular takes care of invalid calls passed "src/".

    public class srcController : Controller
    {
        // GET: src
        public ActionResult index()
        {
            return RedirectToAction("product_ang");
        }

       

        public ActionResult product_ang()
        {

            AngularSrcModel mv = new AngularSrcModel();
            mv.THeStartupScripts = "Te scripts-20221108-2002";
            return View(mv);
        }


        protected override void HandleUnknownAction(string actionName)
        {
            Response.Redirect("/src/" + actionName, true);

        }

    }
}