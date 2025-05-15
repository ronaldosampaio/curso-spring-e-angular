import { Injectable } from '@angular/core';
import { Colunas } from '../../model/colunas/Colunas';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class TabelaService {

 apiUrl = environment.urlApiTabela;

  constructor(private httpClient: HttpClient) {}

  getDadosTabela(): Observable<Colunas[]> {
     return this.httpClient.get<Colunas[]>(this.apiUrl)
  }
/*
  getDadosTabela(): Observable<Colunas[]> {
     return this.httpClient
      .get<Colunas[]>(this.apiUrl)
      .pipe(
          tap((response: any) => {
            console.log('Dados recebidos da API:', response);
             // você pode fazer outras ações aqui, como armazenar dados em cache, emitir eventos, etc.
          }),
      );
  }
*/
}
