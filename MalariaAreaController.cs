using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using INF354Deliverable1.Models;

namespace INF354Deliverable1.Controllers
{
    [RoutePrefix("Api/Malaria")]
    public class MalariaAreaController : ApiController
    {
        Malaria354Entities1 objEntity = new Malaria354Entities1();


        [HttpGet]
        [Route("AllMalariaAreas")]
        public IQueryable<MalariaArea> GetMalariaArea()
        {
            try
            {
                return objEntity.MalariaAreas;
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpGet]
        [Route("GetMalariaAreasById/{malariaareaId}")]
        public IHttpActionResult GetMalariaAreaById(string malariaareaId)
        {
            MalariaArea objGen = new MalariaArea();
            int ID = Convert.ToInt32(malariaareaId);
            try
            {
                objGen = objEntity.MalariaAreas.Find(ID);
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
        [Route("InsertMalariaAreas")]
        public IHttpActionResult PostMalariaArea(MalariaArea data)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                objEntity.MalariaAreas.Add(data);
                objEntity.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }



            return Ok(data);
        }

        [HttpPut]
        [Route("UpdateMalariaAreas")]
        public IHttpActionResult PutMalariaAreaMaster(MalariaArea malariaarea)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                MalariaArea objGen = new MalariaArea();
                objGen = objEntity.MalariaAreas.Find(malariaarea.AreaID);
                if (objGen != null)
                {
                    objGen.City = malariaarea.City;
                    objGen.Province = malariaarea.Province;
                    objGen.Country = malariaarea.Country;
                 




                }
                int i = objEntity.SaveChanges();

            }
            catch (Exception)
            {
                throw;
            }
            return Ok(malariaarea);
        }
        [HttpDelete]
        [Route("DeleteMalariaAreas")]
        public IHttpActionResult DeleteMalariaAreaDelete(int id)
        {
            //int GeneralInformationId = Convert.ToInt32(id);  
            MalariaArea malariaarea = objEntity.MalariaAreas.Find(id);
            if (malariaarea == null)
            {
                return NotFound();
            }

            objEntity.MalariaAreas.Remove(malariaarea);
            objEntity.SaveChanges();

            return Ok(malariaarea);
        }
    }
}
