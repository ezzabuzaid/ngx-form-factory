import { CommonModule } from '@angular/common';
import { Component, forwardRef, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputMaskModule } from '@ngneat/input-mask';

import { MaskField } from '../../fields';
import {
  AbstractFieldFactoryComponent,
  IdDirectiveModule,
  MatFormFieldDirectiveModule,
} from '../../shared';
import { MatInputDirectiveModule } from '../../shared/mat-input.directive';

@Component({
  selector: 'ngx-mask',
  templateUrl: './mask.component.html',
  providers: [
    {
      provide: AbstractFieldFactoryComponent,
      useExisting: forwardRef(() => MaskComponent),
    },
  ],
})
export class MaskComponent extends AbstractFieldFactoryComponent<
  MaskField<string>
> {}

@NgModule({
  declarations: [MaskComponent],
  exports: [MaskComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatFormFieldDirectiveModule,
    IdDirectiveModule,
    MatInputDirectiveModule,
    InputMaskModule.forRoot({
      inputSelector: 'input',
      isAsync: true,
    }),
  ],
})
export class MaskComponentModule {}
