using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using INF354Deliverable1.Models;

namespace INF354Deliverable1.Controllers
{
    [RoutePrefix("Api/Prevention")]
    public class PreventionController : ApiController
    {
        Malaria354Entities1 objEntity = new Malaria354Entities1();


        [HttpGet]
        [Route("AllPreventions")]
        public IQueryable<Prevention> GetPrevention()
        {
            try
            {
                return objEntity.Preventions;
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpGet]
        [Route("GetPreventionsById/{preventionId}")]
        public IHttpActionResult GetPreventionById(string preventionId)
        {
            Prevention objGen = new Prevention();
            int ID = Convert.ToInt32(preventionId);
            try
            {
                objGen = objEntity.Preventions.Find(ID);
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
        [Route("InsertPreventions")]
        public IHttpActionResult PostPrevention(Prevention data)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                objEntity.Preventions.Add(data);
                objEntity.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }



            return Ok(data);
        }

        [HttpPut]
        [Route("UpdatePreventions")]
        public IHttpActionResult PutPreventionMaster(Prevention prevention)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                Prevention objGen = new Prevention();
                objGen = objEntity.Preventions.Find(prevention.PreventionID);
                if (objGen != null)
                {
                    objGen.PreventionDesc = prevention.PreventionDesc;



                }
                int i = objEntity.SaveChanges();

            }
            catch (Exception)
            {
                throw;
            }
            return Ok(prevention);
        }
        [HttpDelete]
        [Route("DeletePreventions")]
        public IHttpActionResult DeletePreventionDelete(int id)
        {
            //int PreventionId = Convert.ToInt32(id);  
            Prevention prevention = objEntity.Preventions.Find(id);
            if (prevention == null)
            {
                return NotFound();
            }

            objEntity.Preventions.Remove(prevention);
            objEntity.SaveChanges();

            return Ok(prevention);
        }
    }
}