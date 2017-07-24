import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeaheadSampleComponent } from './typeahead-sample.component';

describe('TypeaheadSampleComponent', () => {
  let component: TypeaheadSampleComponent;
  let fixture: ComponentFixture<TypeaheadSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeaheadSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeaheadSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
