import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileControlComponent } from './mobile-control.component';

describe('MobileControlComponent', () => {
  let component: MobileControlComponent;
  let fixture: ComponentFixture<MobileControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MobileControlComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
