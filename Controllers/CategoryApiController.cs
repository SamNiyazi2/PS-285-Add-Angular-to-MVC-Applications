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
            return getCategories(PTCViewModel.ENUM_LOAD_CATEGORY_FOR.Input);
        }


        [HttpPost()]
        [Route("SearchCategories")]
        public IHttpActionResult GetSearchCategories()
        {
            return getCategories(PTCViewModel.ENUM_LOAD_CATEGORY_FOR.Search);
        }

        private IHttpActionResult getCategories(PTCViewModel.ENUM_LOAD_CATEGORY_FOR option)
        {
            IHttpActionResult ret = null;
            PTCViewModel vm = new PTCViewModel();

            vm.LoadCategories(option);

            if (vm.Categories.Count() > 0)
            {
                ret = Ok(vm.Categories);
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
