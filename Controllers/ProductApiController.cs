using PTC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;


// 03/09/2021 05:54 pm - SSN - [20210309-1750] - [001] - M04-02 - Add a Web API class
// 03/10/2021 02:24 pm - SSN - [20210310-1420] - [001] - M05-07 - Create search Web AP
// 03/10/2021 07:52 pm - SSN - [20210310-1951] - [001] - M07-03 - Build a Get(id) controller method

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



        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            IHttpActionResult result = null;
            PTCViewModel vm = new PTCViewModel();

            vm.Get(id);

            if (vm.Entity != null)
            {
                result = Ok(vm.Entity);
            }
            else
            {
                if (vm.LastException != null)
                {
                    result = BadRequest(vm.Message);
                }
                else
                {
                    result = NotFound();
                }
            }

            return result;
        }


        [HttpPost]
        public IHttpActionResult Post(Product product)
        {
            IHttpActionResult ret = null;

            PTCViewModel vm = new PTCViewModel();

            if (product != null)
            {

                vm.Entity = product;
                vm.PageMode = PDSAPageModeEnum.Add;
                vm.Save();

                if (vm.IsValid)
                {
                    ret = Created<Product>(Request.RequestUri + vm.Entity.ProductId.ToString(), vm.Entity);

                }
                else
                {
                    if (vm.Messages.Count > 0)
                    {
                        ret = BadRequest(ConvertToModelState(vm.Messages));
                    }
                    else
                    {
                        ret = BadRequest(vm.Message);
                    }
                }
            }

            return ret;
        }


        private ModelStateDictionary ConvertToModelState(System.Web.Mvc.ModelStateDictionary state)
        {

            ModelStateDictionary ret = new ModelStateDictionary();

            foreach (var list in state.ToList())
            {
                for (int i = 0; i < list.Value.Errors.Count; i++)
                {
                    ret.AddModelError(list.Key, list.Value.Errors[i].ErrorMessage);
                }
            }

            return ret;
        }



        [Route("api/productApi/Search")]
        [HttpPost]
        public IHttpActionResult Search([FromBody] ProductSearch search)
        {

            IHttpActionResult ret = null;

            PTCViewModel vm = new PTCViewModel();

            vm.SearchEntity = search;
            vm.Search();

            if (vm.LastException != null)
            {
                ret = BadRequest(vm.Message);
            }
            else
            {
                ret = Ok(vm.Products);
            }

            return ret;
        }


    }
}