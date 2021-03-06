import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFactoryComponent } from './form-factory.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FieldFactoryModule } from '../field-factory/field-factory.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    declarations: [
        FormFactoryComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatProgressBarModule,
        FieldFactoryModule,
        MatButtonModule,
        MatIconModule,
    ],
    exports: [
        FormFactoryComponent
    ],
})
export class FormFactoryModule { }
