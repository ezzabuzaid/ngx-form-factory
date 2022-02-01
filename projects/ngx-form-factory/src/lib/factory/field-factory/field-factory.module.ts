import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { CountryControlModule, MobileControlModule } from '../../controls';
import { DynamicComponentDirective, TogglePasswodDirective } from '../../shared';
import { FieldFactoryComponent } from './field-factory.component';



@NgModule({
  declarations: [
    FieldFactoryComponent,
    TogglePasswodDirective,
    DynamicComponentDirective
  ],
  exports: [
    FieldFactoryComponent,
    TogglePasswodDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MobileControlModule,
    CountryControlModule,
    MatInputModule,
    MatCheckboxModule,
  ]
})
export class FieldFactoryModule { }
