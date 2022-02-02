import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextareaComponent } from './textarea.component';



@NgModule({
    declarations: [
        TextareaComponent
    ],
    exports: [
        TextareaComponent
    ],
    imports: [
        CommonModule,
        TextFieldModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ]
})
export class TextareaModule { }
