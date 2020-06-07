import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryControlComponent } from './country-control.component';

describe('CountryControlComponent', () => {
  let component: CountryControlComponent;
  let fixture: ComponentFixture<CountryControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
