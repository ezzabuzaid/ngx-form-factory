import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldFactoryComponent } from './field-factory.component';

describe('FieldFactoryComponent', () => {
  let component: FieldFactoryComponent;
  let fixture: ComponentFixture<FieldFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
