import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldFactoryComponent } from './field-factory.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
// import { MobileControlModule, CountryControlModule } from '../../controls';
// import { TogglePasswodDirective } from '../../shared';



@NgModule({
  declarations: [
    FieldFactoryComponent,
    // TogglePasswodDirective
  ],
  exports: [FieldFactoryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDatepickerModule,
    // MobileControlModule,
    // CountryControlModule,
    MatCheckboxModule
  ]
})
export class FieldFactoryModule { }
