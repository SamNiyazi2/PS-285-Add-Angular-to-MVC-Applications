using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PTC.Controllers
{
    public class srcController : Controller
    {
        // GET: src
        public ActionResult product_ang()
        {
         //   return RedirectToAction("product_ang", "product");
            return View();
        }

        //public ActionResult productdetail(string id)
        //{
        //    return RedirectToAction("product_ang", "product");
        //}


        protected override void HandleUnknownAction(string actionName)
        {
            Response.Redirect("/src/"+actionName, true);
           
        }
    }
}