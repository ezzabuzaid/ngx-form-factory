import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TypeaheadFieldComponent } from './typeahead-field.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatAutocomplete } from "@angular/material/autocomplete";
@NgModule({
  declarations: [TypeaheadFieldComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatAutocomplete
  ]
})
export class TypeaheadFieldModule { }
