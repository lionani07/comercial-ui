import { Component, OnInit } from '@angular/core';
import { OportunidadeService } from '../oportunidade.service';

@Component({
  selector: 'app-panel-negociacao',
  templateUrl: './panel-negociacao.component.html',
  styleUrls: ['./panel-negociacao.component.css']
})
export class PanelNegociacaoComponent implements OnInit {
  
  oportunidade = {};
  oportunidades = [];
  constructor(private oportunidadeService: OportunidadeService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar(){
    this.oportunidadeService.listar()
   .subscribe(resposta => this.oportunidades = <any> resposta);
  }

  adicionar(){
    this.oportunidadeService.adicionar(this.oportunidade)
    .subscribe(()=>{
        this.oportunidade = {};
        this.consultar();
    });
  }

}
