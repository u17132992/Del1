using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using INF354Deliverable1.Models;

namespace INF354Deliverable1.Controllers
{
    [RoutePrefix("Api/Symptom")]
    public class SymptomController : ApiController
    {
        Malaria354Entities1 objEntity = new Malaria354Entities1();
        [HttpGet]
        [Route("AllSymptomDetails")]
        public IQueryable<Symptom> GetSymptom()
        {
            try
            {
                return objEntity.Symptoms;
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpGet]
        [Route("GetSymptomDetailsById/{symptomId}")]
        public IHttpActionResult GetSymptomById(string symptomId)
        {
            Symptom objGen = new Symptom();
            int ID = Convert.ToInt32(symptomId);
            try
            {
                objGen = objEntity.Symptoms.Find(ID);
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
        [Route("InsertSymptomDetails")]
        public IHttpActionResult PostSymptom(Symptom data)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                objEntity.Symptoms.Add(data);
                objEntity.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }



            return Ok(data);
        }

        [HttpPut]
        [Route("UpdateSymptomDetails")]
        public IHttpActionResult PutSymptomMaster(Symptom symptom)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                Symptom objGen = new Symptom();
                objGen = objEntity.Symptoms.Find(symptom.SymptomID);
                if (objGen != null)
                {
                    objGen.SymptomDesc = symptom.SymptomDesc;



                }
                int i = objEntity.SaveChanges();

            }
            catch (Exception)
            {
                throw;
            }
            return Ok(symptom);
        }
        [HttpDelete]
        [Route("DeleteSymptomDetails")]
        public IHttpActionResult DeleteSymptomDelete(int id)
        {
            //int SymptomId = Convert.ToInt32(id);  
            Symptom symptom = objEntity.Symptoms.Find(id);
            if (symptom == null)
            {
                return NotFound();
            }

            objEntity.Symptoms.Remove(symptom);
            objEntity.SaveChanges();

            return Ok(symptom);
        }
    }
}
