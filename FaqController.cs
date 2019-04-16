using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using INF354Deliverable1.Models;

namespace INF354Deliverable1.Controllers
{
    [RoutePrefix("Api/Faq")]
    public class FaqController : ApiController
    {
        Malaria354Entities1 objEntity = new Malaria354Entities1();


            [HttpGet]
            [Route("AllFaqDetails")]
            public IQueryable<Faq> GetFaq()
            {
                try
                {
                    return objEntity.Faqs;
                }
                catch (Exception)
                {
                    throw;
                }
            }

            [HttpGet]
            [Route("GetFaqsById/{faqId}")]
            public IHttpActionResult GetFaqById(string faqId)
            {
                Faq objGen = new Faq();
                int ID = Convert.ToInt32(faqId);
                try
                {
                    objGen = objEntity.Faqs.Find(ID);
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
            [Route("InsertFaqDetails")]
            public IHttpActionResult PostFaq(Faq data)
            {

                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                try
                {
                    objEntity.Faqs.Add(data);
                    objEntity.SaveChanges();
                }
                catch (Exception)
                {
                    throw;
                }



                return Ok(data);
            }

            [HttpPut]
            [Route("UpdateFaqDetails")]
            public IHttpActionResult PutFaqMaster(Faq faq)
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                try
                {
                Faq objGen = new Faq();
                    objGen = objEntity.Faqs.Find(faq.FaqID);
                    if (objGen != null)
                    {
                        objGen.faqDesc = faq.faqDesc;



                    }
                    int i = objEntity.SaveChanges();

                }
                catch (Exception)
                {
                    throw;
                }
                return Ok(faq);
            }
            [HttpDelete]
            [Route("DeleteFaqDetails")]
            public IHttpActionResult DeleteGFaqDelete(int id)
            {
                //int GeneralInformationId = Convert.ToInt32(id);  
                Faq faq = objEntity.Faqs.Find(id);
                if (faq == null)
                {
                    return NotFound();
                }

                objEntity.Faqs.Remove(faq);
                objEntity.SaveChanges();

                return Ok(faq);
            }
        }
    }
