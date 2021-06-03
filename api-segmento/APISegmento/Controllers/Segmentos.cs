using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace APISegmento.Controllers
{
    [Route("segmentos")]
    [ApiController]
    public class Segmentos : ControllerBase
    {
        [HttpGet]
        [Route("")]
        public string Get()
        {
            return "Ok";
        }
  
        [HttpGet]
        [Route("listar")]
        public List<Segmento> Index()
        {
            return Segmento.All();
        }
  
        [HttpPut]
        [Route("atualizar/{id}")]
        public Segmento Atualizar(int id, [FromBody] Segmento segmento)
        {
            segmento.Id = id;
            return segmento.Atualizar();
        }

    }
}
