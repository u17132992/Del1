using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using INF354Deliverable1.Models;

namespace INF354Deliverable1.Controllers
{
    [RoutePrefix("Api/General")]
    public class GeneralController : ApiController
    {
        Malaria354Entities1 objEntity = new Malaria354Entities1();


            [HttpGet]
            [Route("AllGeneralDetails")]
            public IQueryable<GeneralInformation> GetGeneralInformation()
            {
                try
                {
                    return objEntity.GeneralInformations;
                }
                catch (Exception)
                {
                    throw;
                }
            }

            [HttpGet]
            [Route("GetGeneralDetailsById/{generalId}")]
            public IHttpActionResult GetGeneralById(string generalId)
            {
                GeneralInformation objGen = new GeneralInformation();
                int ID = Convert.ToInt32(generalId);
                try
                {
                    objGen = objEntity.GeneralInformations.Find(ID);
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
            [Route("InsertGeneralDetails")]
            public IHttpActionResult PostGeneral(GeneralInformation data)
            {

                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                try
                {
                    objEntity.GeneralInformations.Add(data);
                    objEntity.SaveChanges();
                }
                catch (Exception)
                {
                    throw;
                }



                return Ok(data);
            }

            [HttpPut]
            [Route("UpdateGeneralDetails")]
            public IHttpActionResult PutGeneralMaster(GeneralInformation generalinformation)
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                try
                {
                    GeneralInformation objGen = new GeneralInformation();
                    objGen = objEntity.GeneralInformations.Find(generalinformation.GeneralInformationID);
                    if (objGen != null)
                    {
                        objGen.GeneralDesc = generalinformation.GeneralDesc;



                    }
                    int i = objEntity.SaveChanges();

                }
                catch (Exception)
                {
                    throw;
                }
                return Ok(generalinformation);
            }
            [HttpDelete]
            [Route("DeleteGeneralDetails")]
            public IHttpActionResult DeleteGeneralDelete(int id)
            {
                //int GeneralInformationId = Convert.ToInt32(id);  
                GeneralInformation generalinformation = objEntity.GeneralInformations.Find(id);
                if (generalinformation == null)
                {
                    return NotFound();
                }

                objEntity.GeneralInformations.Remove(generalinformation);
                objEntity.SaveChanges();

                return Ok(generalinformation);
            }
        }
    }
