using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using INF354Deliverable1.Models;

namespace INF354Deliverable1.Controllers
{
    [RoutePrefix("Api/Transmission")]
    public class TransmissionController : ApiController
    {

        Malaria354Entities1 objEntity = new Malaria354Entities1();


        [HttpGet]
        [Route("AllTransmissions")]
        public IQueryable<Transmission> GetTransmission()
        {
            try
            {
                return objEntity.Transmissions;
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpGet]
        [Route("GetTransmissionsById/{transmissionId}")]
        public IHttpActionResult GetTransmissionById(string transmissionId)
        {
            Transmission objGen = new Transmission();
            int ID = Convert.ToInt32(transmissionId);
            try
            {
                objGen = objEntity.Transmissions.Find(ID);
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
        [Route("InsertTransmissions")]
        public IHttpActionResult PostTransmission(Transmission data)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                objEntity.Transmissions.Add(data);
                objEntity.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }



            return Ok(data);
        }

        [HttpPut]
        [Route("UpdateTransmissions")]
        public IHttpActionResult PutTransmissionMaster(Transmission transmission)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                Transmission objGen = new Transmission();
                objGen = objEntity.Transmissions.Find(transmission.TransmissionID);
                if (objGen != null)
                {
                    objGen.TransmissionDesc = transmission.TransmissionDesc;



                }
                int i = objEntity.SaveChanges();

            }
            catch (Exception)
            {
                throw;
            }
            return Ok(transmission);
        }
        [HttpDelete]
        [Route("DeleteTransmissions")]
        public IHttpActionResult DeleteTransmissionDelete(int id)
        {
            //int TransmissionId = Convert.ToInt32(id);  
            Transmission transmission = objEntity.Transmissions.Find(id);
            if (transmission == null)
            {
                return NotFound();
            }

            objEntity.Transmissions.Remove(transmission);
            objEntity.SaveChanges();

            return Ok(transmission);
        }
    }
}