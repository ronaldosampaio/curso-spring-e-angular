import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-pesquisar',
  imports: [FormsModule, ReactiveFormsModule,MatButtonModule],
  templateUrl: './pesquisar.component.html',
  styleUrl: './pesquisar.component.scss'
})
export class PesquisarComponent implements OnInit {

  @Output() submitForm = new EventEmitter<string>;
  searchForm!: FormGroup;

  ngOnInit() : void {
    this.searchForm = new FormGroup({
      search: new FormControl('', Validators.required)
    });
  }

  onSubmitForm() : void {
    console.log("pesquisar.component.ts this.searchForm.value =", this.searchForm.value.search)
    this.submitForm.emit(this.searchForm.value.search);
  }
}
