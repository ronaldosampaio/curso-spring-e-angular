import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Colunas } from '../../model/colunas/Colunas';


@Component({
  selector: 'app-table-reutilizavel',
  imports: [MatTableModule, MatSortModule, MatPaginatorModule, CommonModule],
  templateUrl: './table-reutilizavel.component.html',
  styleUrl: './table-reutilizavel.component.scss'
})
export class TableReutilizavelComponent implements OnInit, AfterViewInit, OnChanges{
  
  @Input() displayedColumns: string[] = [];
  @Input() dados: Colunas[] = [];
  @Input() pageSize!: number;
  @Input() pageIndex!: number;
  @Input() pageSizeOptions!: number[];
  @Input() showFirstLastButtons!: boolean;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Output() pageChange = new EventEmitter<PageEvent>;

  dataSource = new MatTableDataSource<Colunas>([]);

  ngOnInit() {
    this.dataSource.data = this.dados;
    console.log("table-reutilizavel.component.ts:: this.dataSource",this.dataSource.data);

    //console.log("Componente filho dados:",this.dados);
    //console.log("Componente filho dataSource.data:",this.dataSource.data);
    //console.log("Componente filho pageSize:",this.pageSize);
    //console.log("Componente filho pageIndex:",this.pageIndex);
    //console.log("Componente filho pageSizeOptions:",this.pageSizeOptions);
    //console.log("Componente filho showFirstLastButtons:",this.showFirstLastButtons);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource.data = this.dados;
  }

  onPageChange(event: PageEvent) {
    this.pageChange.emit(event);
  }


}
