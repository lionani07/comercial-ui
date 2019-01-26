import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OportunidadeService {

  apiUrl= 'http://localhost:8080/oportunidades';

  constructor(private httpCliente: HttpClient) { }
  
  listar(){
    return this.httpCliente.get(this.apiUrl);
  }

  adicionar(oportunidade : any){
    return this.httpCliente.post(this.apiUrl, oportunidade);
  }
}
