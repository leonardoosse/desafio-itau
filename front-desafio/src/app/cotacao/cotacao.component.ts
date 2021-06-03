import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//ver exemplo
//https://stackblitz.com/edit/angular-qurccv?file=app%2Fapp.component.ts

export class Segmento {
  id: number | undefined;
  nome: string | undefined;
  taxa: number | undefined ;
}

@Component({
  selector: 'app-cotacao',
  templateUrl: './cotacao.component.html',
  styleUrls: ['./cotacao.component.css']
})
export class CotacaoComponent implements OnInit {

  private endpoint = 'latest';
  private access_key = 'c571b17dc0985d932a0fbf5483863cf7';
  private REST_API_MOEDA = "http://api.exchangeratesapi.io/v1/" + this.endpoint + "?access_key=" + this.access_key;
  private REST_API_SEGMENTO = "http://localhost:8080/segmentos";
  private REST_API_COTACAO = "http://localhost:8081/conversao/calcular";


  taxaConversao: {[key: string]: number} = {};
  taxaSegmento: Segmento[] | undefined;

  selectedMoeda=""
  selectedSegmento=""
  valorMoeda = "";
  valorCalculado = "";

  constructor(private http: HttpClient) { }  

  ngOnInit(): void {
    this.carregarMoeda();
    this.carregarSegmento() 
  }

  carregarSegmento() {
    this.http.get<any>(this.REST_API_SEGMENTO).subscribe(
      response => {
        this.taxaSegmento = response;
      }
    );
  }

  carregarMoeda() {
    this.http.get<any>(this.REST_API_MOEDA).subscribe(
      response => {
        this.taxaConversao = response["rates"];
      }
    );
  }

  onOptionsSelected(value:string){}

  mensagem = "";

  validaCampos(taxaMoeda: string, taxaSegmento: string, valorDesejado: string): string {
    
    if (taxaMoeda == "")
    {
      return "Por favor, escolha uma moeda válida.";
    }
    if (taxaSegmento == "")
    {
      return "Por favor, escolha um segmento válido.";
    }
    if (valorDesejado == "")
    {
      return "É obrigatório inserir um valor válido.";
    }    
    return "";

  }

  calcular(taxaMoeda: string, taxaSegmento: string, valorDesejado: string): void {

    this.mensagem = this.validaCampos(taxaMoeda, taxaSegmento, valorDesejado);
    var request = {
      taxaMoeda : Number(taxaMoeda),
      taxaSegmento : Number(taxaSegmento),
      valorDesejado : Number(valorDesejado)
    }

    if (this.mensagem == "")
    {
      this.http.post<any>(this.REST_API_COTACAO, request).subscribe(
        response => {
          this.valorCalculado = response["valorCalculado"];
      });
    }
  }
}

//Parametrizar valores do front
//Tipo Campos
//Tratamento de Erro

