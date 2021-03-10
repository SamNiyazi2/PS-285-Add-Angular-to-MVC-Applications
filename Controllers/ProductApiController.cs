using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


// 03/09/2021 05:54 pm - SSN - [20210309-1750] - [001] - M04-02 - Add a Web API class


namespace PTC.Controllers
{
    public class ProductApiController : ApiController
    {

        public IHttpActionResult Get()
        {

          //  throw new ApplicationException("mvc-err-ssn-20210308-1936: Test exception.");

            IHttpActionResult ret = null;

            PTCViewModel vm = new PTCViewModel();

            vm.Get();

            if (vm.Products.Count > 0)
            {
                ret = Ok(vm.Products);
            }
            else if (vm.LastException != null)
            {
                ret = BadRequest(vm.Message);
            }
            else
            {
                ret = NotFound();
            }

            return ret;
        }
    }
}