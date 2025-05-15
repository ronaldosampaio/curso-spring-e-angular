import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableReutilizavelComponent } from './table-reutilizavel.component';

describe('TableReutilizavelComponent', () => {
  let component: TableReutilizavelComponent;
  let fixture: ComponentFixture<TableReutilizavelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableReutilizavelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableReutilizavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
