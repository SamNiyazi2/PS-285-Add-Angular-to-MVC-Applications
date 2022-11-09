using System.Web;
using System.Web.Optimization;

namespace PTC
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));


            // 05/28/2021 12:04 pm - SSN - [20210528-1203] - [001] - Add validation

            bundles.Add(new ScriptBundle("~/bundles/validators").Include(
            "~/Scripts/jquery.validate.js",
            "~/Scripts/jquery.validate.unobtrusive.js"));


            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/toastr").Include(
                  "~/node_modules/toastr/build/toastr.min.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/bootstrap.css",
                "~/Content/site.css",
                "~/src/styles.css",
                "~/node_modules/toastr/build/toastr.min.css"));


            // 05/30/2021 05:01 pm - SSN - [20210530-1701] - [001] - Deploy to Azure 
            // 11/08/2022 07:25 pm - SSN - Not in use.
            //bundles.Add(new ScriptBundle("~/bundles/angular_dev").Include(
            //    "~/node_modules/core-js/client/shim.min.js",
            //    "~/node_modules/zone.js/dist/zone.js",
            //    "~/node_modules/systemjs/dist/system.src.js"));


            // 11/09/2022 08:57 am - SSN - Angular no longer uses this file name convention.
            //bundles.Add(new ScriptBundle("~/bundles/angular_prod").Include(
            //    "~/dist/inline.bundle.js",
            //    "~/dist/polyfills.bundle.js",
            //    "~/dist/styles.bundle.js",
            //    "~/dist/vendor.bundle.js",
            //    "~/dist/main.bundle.js"));




        }
    }

}