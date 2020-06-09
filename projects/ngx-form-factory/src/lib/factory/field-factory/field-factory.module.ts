import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CountryControlModule, MobileControlModule } from '../../controls';
import { FieldFactoryComponent } from './field-factory.component';
import { TogglePasswodDirective } from '../../shared';



@NgModule({
  declarations: [
    FieldFactoryComponent,
    TogglePasswodDirective
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
    MobileControlModule,
    CountryControlModule,
    MatInputModule,
    MatCheckboxModule,
  ]
})
export class FieldFactoryModule { }
