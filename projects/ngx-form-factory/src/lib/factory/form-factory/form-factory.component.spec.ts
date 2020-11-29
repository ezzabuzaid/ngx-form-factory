import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFactoryComponent } from './form-factory.component';

describe('FormContainerComponent', () => {
  let component: FormFactoryComponent;
  let fixture: ComponentFixture<FormFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormFactoryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
