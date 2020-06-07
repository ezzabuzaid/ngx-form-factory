import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormContainerComponent } from './form-container.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FieldFactoryModule } from '../field-factory/field-factory.module';


@NgModule({
    declarations: [
        FormContainerComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatProgressBarModule,
        FieldFactoryModule,
    ],
    exports: [
        FormContainerComponent
    ],
})
export class FormContainerModule { }
