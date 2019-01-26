import { Component, OnInit } from '@angular/core';
import { OportunidadeService } from '../oportunidade.service';

import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-panel-negociacao',
  templateUrl: './panel-negociacao.component.html',
  styleUrls: ['./panel-negociacao.component.css']
})
export class PanelNegociacaoComponent implements OnInit {
  
  oportunidade = {};
  oportunidades = [];
  constructor(
    private oportunidadeService: OportunidadeService,
    private messageService : MessageService
    ) { }

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
        this.messageService.add({
          severity:'success',
          summary:'Oportunidade adicionada con succeso'          
        });
    },
    resporta=>{
      let msg = 'Error inesperado. Intente novamente.';
        if(resporta.error.message){
          msg  = resporta.error.message;
        }
      this.messageService.add({
        severity:'error',
        summary: msg          
      });
    });
  }

}
