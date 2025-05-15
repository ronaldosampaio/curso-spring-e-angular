import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialAngularComponent } from './tutorial-angular.component';

describe('TutorialAngularComponent', () => {
  let component: TutorialAngularComponent;
  let fixture: ComponentFixture<TutorialAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
