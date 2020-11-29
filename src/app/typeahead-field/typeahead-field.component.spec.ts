import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeaheadFieldComponent } from './typeahead-field.component';

describe('TypeaheadFieldComponent', () => {
  let component: TypeaheadFieldComponent;
  let fixture: ComponentFixture<TypeaheadFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeaheadFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeaheadFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
