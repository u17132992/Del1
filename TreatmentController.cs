using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using INF354Deliverable1.Models;

namespace INF354Deliverable1.Controllers
{
    [RoutePrefix("Api/Treatment")]
    public class TreatmentController : ApiController
    {
        Malaria354Entities1 objEntity = new Malaria354Entities1();


        [HttpGet]
        [Route("AllTreatments")]
        public IQueryable<Treatment> GetTreatment()
        {
            try
            {
                return objEntity.Treatments;
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpGet]
        [Route("GetTreatmentsById/{treatmentId}")]
        public IHttpActionResult GetTreatmentById(string treatmentId)
        {
            Treatment objGen = new Treatment();
            int ID = Convert.ToInt32(treatmentId);
            try
            {
                objGen = objEntity.Treatments.Find(ID);
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
        [Route("InsertTreatments")]
        public IHttpActionResult PostTreatment(Treatment data)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                objEntity.Treatments.Add(data);
                objEntity.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }



            return Ok(data);
        }

        [HttpPut]
        [Route("UpdateTreatments")]
        public IHttpActionResult PutTreatmentMaster(Treatment treatment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                Treatment objGen = new Treatment();
                objGen = objEntity.Treatments.Find(treatment.TreatmentID);
                if (objGen != null)
                {
                    objGen.TreatmentDesc = treatment.TreatmentDesc;



                }
                int i = objEntity.SaveChanges();

            }
            catch (Exception)
            {
                throw;
            }
            return Ok(treatment);
        }
        [HttpDelete]
        [Route("DeleteTreatments")]
        public IHttpActionResult DeleteTreatmentDelete(int id)
        {
            //int TreatmentId = Convert.ToInt32(id);  
            Treatment treatment = objEntity.Treatments.Find(id);
            if (treatment == null)
            {
                return NotFound();
            }

            objEntity.Treatments.Remove(treatment);
            objEntity.SaveChanges();

            return Ok(treatment);
        }
    }
}
