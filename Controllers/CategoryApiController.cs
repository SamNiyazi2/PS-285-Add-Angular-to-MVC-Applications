using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


// 03/10/2021 12:57 pm - SSN - [20210310-1254] - [001] - M05-03 - Build web API to get categories


namespace PTC.Controllers
{
    [RoutePrefix("api/CategoryApi")]
    public class CategoryApiController : ApiController
    {

        public IHttpActionResult Get()
        {
            return getCategories();
        }


        [HttpPost()]
        [Route("SearchCategories")]
        public IHttpActionResult GetSearchCategories()
        {
            return getCategories();
        }

        private IHttpActionResult getCategories()
        {
            IHttpActionResult ret = null;
            PTCViewModel vm = new PTCViewModel();

            vm.LoadSearchCategories();

            if (vm.SearchCategories.Count() > 0)
            {
                ret = Ok(vm.SearchCategories);
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
