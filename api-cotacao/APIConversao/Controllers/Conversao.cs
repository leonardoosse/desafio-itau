using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APIConversao.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace APIConversao.Controllers
{
    [ApiController]
    [Route("conversao")]
    public class Conversao : ControllerBase
    {
        [HttpGet]
        [Route("")]
        public string Get()
        {
            return "Ok";
        }

        [HttpPost]
        [Route("calcular")]
        public JsonResult Calcular([FromBody] Valor valor)
        {
            return valor.Calcular();            
        }
    }
}
