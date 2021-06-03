using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APIConversao.Model
{
    public class Valor
    {
        public Valor() { }
        
        public decimal taxaMoeda { get; set; }
        public decimal taxaSegmento { get; set; }
        public decimal valorDesejado { get; set; }

        public JsonResult Calcular()
        {
            decimal valorCalculado = (this.valorDesejado * this.taxaMoeda) * (1 + this.taxaSegmento);

            return new JsonResult(new
            {
                valorCalculado = valorCalculado
            }); 
        }
    }
}
