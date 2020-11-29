import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgModel, ReactiveFormsModule } from '@angular/forms';
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
import { MobileControlModule, CountryControlModule } from './controls';
import { FieldFactoryComponent } from './factory/field-factory/field-factory.component';
import { FormFactoryComponent } from './factory/form-factory/form-factory.component';
import { TogglePasswodDirective } from './shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        FormFactoryComponent,
        FieldFactoryComponent,
        TogglePasswodDirective
    ],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatProgressBarModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MobileControlModule,
        CountryControlModule,
        MatInputModule,
        MatCheckboxModule,
    ],
    exports: [
        FormFactoryComponent,
        FieldFactoryComponent,
        TogglePasswodDirective
    ],
})
export class FormFactoryModule { }
