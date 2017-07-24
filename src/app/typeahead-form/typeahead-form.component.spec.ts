import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeaheadFormComponent } from './typeahead-form.component';

describe('TypeaheadFormComponent', () => {
  let component: TypeaheadFormComponent;
  let fixture: ComponentFixture<TypeaheadFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeaheadFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeaheadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
