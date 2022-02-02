import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputMaskModule } from '@ngneat/input-mask';
import { MaskComponent } from './mask.component';


@NgModule({
    declarations: [
        MaskComponent
    ],
    exports: [
        MaskComponent
    ],
    imports: [
        CommonModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        InputMaskModule.forRoot({
            inputSelector: 'input',
            isAsync: true,
        })
    ]
})
export class MaskModule { }
