import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MobileControlComponent } from './mobile-control.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    MobileControlComponent
  ],
  exports: [
    MobileControlComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class MobileControlModule { }
