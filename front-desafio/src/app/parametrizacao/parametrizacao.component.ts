import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Segmento } from './parametrizacao';
import { FormControl , FormGroup} from '@angular/forms';

@Component({
  selector: 'app-parametrizacao',
  templateUrl: './parametrizacao.component.html',
  styleUrls: ['./parametrizacao.component.css']
})
export class ParametrizacaoComponent implements OnInit {
 
  segmentos: Segmento[] | undefined;
  mensagem: string | undefined;

  constructor(private http: HttpClient) { }

  private REST_API_SERVER = "http://localhost:8080/segmentos/listar";

  ngOnInit(): void {
    this.carregarSegmento() 
  }

  carregarSegmento() {
    this.http.get<any>(this.REST_API_SERVER).subscribe(
      response => {
        this.segmentos = response;
      }
    );
  }

  Atualizar(segmento:Segmento, novaTaxa:string){
    segmento.taxa = Number(novaTaxa)
    this.http.put(this.REST_API_SERVER+'/atualizar/'+segmento.id, segmento).subscribe(
      response => {
        segmento = new Segmento()
        this.mensagem="Segmento Alterado!"
        setTimeout(() => {
          this.mensagem = undefined
        }, 2000)
        this.carregarSegmento()
      }
    );
  }
}
