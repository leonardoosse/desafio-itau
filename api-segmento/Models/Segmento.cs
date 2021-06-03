using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace Models
{
    [Table("segmentos")]
    public class Segmento
    {
        public Segmento() { }

        public int Id { get; set; }
        public string Nome { get; set; }
        public decimal Taxa { get; set; }

        private static DBContexto db = new DBContexto();

        public static List<Segmento> All()
        {
            return db.Segmentos.AsNoTracking().ToList();
        }

        public Segmento Atualizar()
        {
            SqlConnection cn = new SqlConnection(Conexao.Dados);
            cn.Open();

            SqlCommand cmd = new SqlCommand("update segmentos set taxa = @taxa where id = @id", cn);
            cmd.Parameters.Add("@id", SqlDbType.Int);
            cmd.Parameters["@id"].Value = this.Id;
            cmd.Parameters.Add("@taxa", SqlDbType.Decimal);
            cmd.Parameters["@taxa"].Value = this.Taxa;
            cmd.ExecuteNonQuery();

            cn.Close();
            cn.Dispose();
            cmd.Dispose();
            return this;
        }

        public Segmento AtualizarEf()
        {
            db.Segmentos.Update(this);
            db.SaveChanges();
            return this;
        }

    }
}
