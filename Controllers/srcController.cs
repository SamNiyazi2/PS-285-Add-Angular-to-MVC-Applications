
using System.IO;
using System.Reflection;
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

            SSN_Angular_Script_Util_Framework.Angular_Scripts_loader_v02.Angular_runtime_script_dir = "\\dist_1109";
            SSN_Angular_Script_Util_Framework.Angular_Scripts_loader_v02.Angular_runtime_script_dir_relative = "/dist_1109/";
            SSN_Angular_Script_Util_Framework.Angular_Scripts_loader_v02.Angular_runtime_build_index_file = "dist_1109\\index.html";
            SSN_Angular_Script_Util_Framework.Angular_Scripts_loader_v02.LoadScripts();

            mv.TheStartupScripts = SSN_Angular_Script_Util_Framework.Angular_Scripts_loader_v02.getScripts();

            return View(mv);
        }


        protected override void HandleUnknownAction(string actionName)
        {
            Response.Redirect("/src/" + actionName, true);

        }

    }
}