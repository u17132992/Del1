using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using INF354Deliverable1.Models;

namespace INF354Deliverable1.Controllers
{
    [RoutePrefix("Api/Emergency")]
    public class EmergencyController : ApiController
    {

        Malaria354Entities1 objEntity = new Malaria354Entities1();


            [HttpGet]
            [Route("AllEmergencyDetails")]
            public IQueryable<EmergencyContact> GetEmergencyContact()
            {
                try
                {
                    return objEntity.EmergencyContacts;
                }
                catch (Exception)
                {
                    throw;
                }
            }

            [HttpGet]
            [Route("GetEmergencyDetailsById/{emergencyId}")]
            public IHttpActionResult GetEmergencyContactById(string emergencyId)
            {
            EmergencyContact objGen = new EmergencyContact();
                int ID = Convert.ToInt32(emergencyId);
                try
                {
                    objGen = objEntity.EmergencyContacts.Find(ID);
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
            [Route("InsertEmergencyDetails")]
            public IHttpActionResult PostEmergencyContact(EmergencyContact data)
            {

                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                try
                {
                    objEntity.EmergencyContacts.Add(data);
                    objEntity.SaveChanges();
                }
                catch (Exception)
                {
                    throw;
                }



                return Ok(data);
            }

            [HttpPut]
            [Route("UpdateEmergencyDetails")]
            public IHttpActionResult PutEmergencyContactMaster(EmergencyContact emergencycontact)
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                try
                {
                EmergencyContact objGen = new EmergencyContact();
                    objGen = objEntity.EmergencyContacts.Find(emergencycontact.EmergencyID);
                    if (objGen != null)
                    {
                        objGen.EmergencyName = emergencycontact.EmergencyName;
                    objGen.EmergencyContactNumber = emergencycontact.EmergencyContactNumber;
                    objGen.EmergencyEmail = emergencycontact.EmergencyEmail;
                    objGen.EmergencyAddress = emergencycontact.EmergencyAddress;
                   



                    }
                    int i = objEntity.SaveChanges();

                }
                catch (Exception)
                {
                    throw;
                }
                return Ok(emergencycontact);
            }
            [HttpDelete]
            [Route("DeleteEmergencyDetails")]
            public IHttpActionResult DeleteEmergencyContactDelete(int id)
            {
            //int GeneralInformationId = Convert.ToInt32(id);  
            EmergencyContact emergencycontact = objEntity.EmergencyContacts.Find(id);
                if (emergencycontact == null)
                {
                    return NotFound();
                }

                objEntity.EmergencyContacts.Remove(emergencycontact);
                objEntity.SaveChanges();

                return Ok(emergencycontact);
            }
        }
    }
