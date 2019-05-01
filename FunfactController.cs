using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using INF354Deliverable1.Models;

namespace INF354Deliverable1.Controllers
{
    [RoutePrefix("Api/FunFact")]
    public class FunfactController : ApiController
    {
        Malaria354Entities1 objEntity = new Malaria354Entities1();


        [HttpGet]
        [Route("AllFunFacts")]
        public IQueryable<FunFact> GetFunFact()
        {
            try
            {
                return objEntity.FunFacts;
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpGet]
        [Route("GetFunFactsById/{funFactId}")]
        public IHttpActionResult GetFunFactById(string funFactId)
        {
            FunFact objGen = new FunFact();
            int ID = Convert.ToInt32(funFactId);
            try
            {
                objGen = objEntity.FunFacts.Find(ID);
                if (objGen == null)
                {
                    return NotFound();
                }

            }
            catch (Exception)
            {
                throw;
            }

            return Ok(objGen);
        }

        [HttpPost]
        [Route("InsertFunFacts")]
        public IHttpActionResult PostFunFact(FunFact data)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                objEntity.FunFacts.Add(data);
                objEntity.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }



            return Ok(data);
        }

        [HttpPut]
        [Route("UpdateFunFacts")]
        public IHttpActionResult PutFunFactMaster(FunFact funFact)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                FunFact objGen = new FunFact();
                objGen = objEntity.FunFacts.Find(funFact.FunfactID);
                if (objGen != null)
                {
                    objGen.FunFactDesc = funFact.FunFactDesc;



                }
                int i = objEntity.SaveChanges();

            }
            catch (Exception)
            {
                throw;
            }
            return Ok(funFact);
        }
        [HttpDelete]
        [Route("DeleteFunFacts")]
        public IHttpActionResult DeleteFunFactDelete(int id)
        {
            //int FunfactId = Convert.ToInt32(id);  
            FunFact funFact = objEntity.FunFacts.Find(id);
            if (funFact == null)
            {
                return NotFound();
            }

            objEntity.FunFacts.Remove(funFact);
            objEntity.SaveChanges();

            return Ok(funFact);
        }
    }
}