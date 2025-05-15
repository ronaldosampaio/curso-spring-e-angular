import { Component, OnInit } from '@angular/core';
import { TableReutilizavelComponent } from '../table-reutilizavel/table-reutilizavel.component';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Colunas } from '../../model/colunas/Colunas';
import { PesquisarComponent } from '../pesquisar/pesquisar.component';
import { TabelaService } from '../../services/tabela/tabela.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [TableReutilizavelComponent, MatSortModule, MatPaginatorModule, PesquisarComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  dados!: Colunas[]; // dados simulados
  dadosPesquisados!: Colunas[];
  searchText!: string;

  constructor(private tabelaService: TabelaService){ }

  ngOnInit(): void {

    this.tabelaService.getDadosTabela().subscribe({
      next: (response) => {
        console.log("Dados retornado da api!!!!: ", response)
          this.dados = response;
          this.dadosPesquisados = response;
          console.log("Componente pai dados da tabela", this.dadosPesquisados);
      },
      error: (error) => {
        console.log("Erro na api: ",error.message);
      },
      complete: () => {
        console.log("Dados retornado com sucesso!!!");
      }
    });
  }

  getDadosTabela(searchText: string) {
    console.log(searchText)
    this.dados = this.dadosPesquisados.filter(response =>
      Object.values(response)
        .join(' ')
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
    console.log("Filter this.dados::",this.dados)

     /*
    const textoPesquisado = (this.searchText || '').toLowerCase();
    this.dados =  this.dadosPesquisados.filter((response) => {
      return response.name.toLowerCase().includes(searchText.toLowerCase());
    })
    */

    }








  onPageChange(event: any) {
    /*
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.length = this.dadosDasColunas.length;
    */
    //console.log("PageEvent:::", event);
  }

  onSubmitForm(searchText: string) {
    this.searchText = searchText;
    this.tabelaService.getDadosTabela().subscribe((response) => {
      this.dados = response;
      this.dadosPesquisados = response;
      const filterValue = searchText.toLowerCase();
      this.dados = response.filter((response) => response.name.toLowerCase().indexOf(filterValue) > -1);
      console.log(this.dados);
      return this.dados;
    })
  }

  dadosDaTabela(): void{
    const dados = [
      {id: 1, name: 'Angular', category: 'Front-End'},
      {id: 2, name: 'Java', category: 'Back-End'},
      {id: 3, name: 'Lithium', category: 'la'},
      {id: 4, name: 'Beryllium', category: 's1'},
      {id: 5, name: 'Boron', category: 't3'},
      {id: 6, name: 'Carbon', category: 'd4'},
      {id: 7, name: 'Nitrogen', category: 'h6'},
      {id: 8, name: 'Oxygen', category: 'o8'},
      {id: 9, name: 'Fluorine', category: 'p1'},
      {id: 10, name: 'Neon', category: 'k7'},
    ];//dados da tabela

    this.dados = dados;

    console.log("Dados componente pai",this.dados);
  }
}


/*
filterPara(name: string): string[] {
    const filterValue = name.toLowerCase();
    return this.glosas.filter(glosas => glosas.glosaFormatada.toLowerCase().indexOf(filterValue) > -1);
  }
*/


 /*
   this.dados = this.dadosPesquisados.filter(response =>
      Object.values(response)
        .join(' ')
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
  */

  /*

   this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(["projeto-table-reutilizavel"]));


*/


 //Faz pesquisa em todos campos
  /*
  onPesquisarInput(valor: string) {

  this.dados = this.todosDados.filter(response =>
    Object.values(response)
      .join(' ')
      .includes(valor));
      console.log(this.dados)
  }

  //Pesquisar em todos campos
  this.dados = this.dadosPesquisados.filter(response =>
      Object.values(response)
            .some(value => value.toLowerCase()
            .includes(this.searchText.toLowerCase())));

  //pesquisa na coluna nome Completo
  this.dados =  this.todosDados.filter(response => {
    return response.name.includes(valor.toLowerCase());
  })
  */

   //this.dados =  this.dadosPesquisados.filter((response) => {
      //return response.name.toLowerCase().includes(this.searchText.toLowerCase());
    //})
    //this.dados = this.dadosPesquisados;
    //console.log("onSubmitForm::",this.dados);
