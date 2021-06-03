using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Models
{
    public class DBContexto : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(Conexao.Dados);
                base.OnConfiguring(optionsBuilder);
            }
        }
        public DbSet<Segmento> Segmentos { get; set; }
    }
}
