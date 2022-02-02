import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { CountryControlModule, MobileControlModule, TextareaModule } from '../controls';
import { DynamicComponentDirective, TogglePasswodDirective } from '../shared';
import { FieldFactoryComponent } from './field-factory/field-factory.component';
import { FormFactoryComponent } from './form-factory/form-factory.component';

@NgModule({
    declarations: [
        FieldFactoryComponent,
        FormFactoryComponent,
        TogglePasswodDirective,
        DynamicComponentDirective
    ],
    exports: [
        FieldFactoryComponent,
        FormFactoryComponent,
        TogglePasswodDirective,
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatProgressBarModule,
        MatButtonModule,
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
        TextareaModule
    ]
})
export class FactoryModule { }
