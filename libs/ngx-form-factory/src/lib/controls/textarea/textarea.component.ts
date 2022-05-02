import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { Component, forwardRef, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { TextareaField } from '../../fields';
import {
  AbstractFieldFactoryComponent,
  IdDirectiveModule,
  MatFormFieldDirectiveModule,
} from '../../shared';
import { MatInputDirectiveModule } from '../../shared/mat-input.directive';

@Component({
  selector: 'ngx-textarea',
  templateUrl: './textarea.component.html',
  providers: [
    {
      provide: AbstractFieldFactoryComponent,
      useExisting: forwardRef(() => TextareaComponent),
    },
  ],
})
export class TextareaComponent extends AbstractFieldFactoryComponent<TextareaField> {}

@NgModule({
  declarations: [TextareaComponent],
  exports: [TextareaComponent],
  imports: [
    CommonModule,
    TextFieldModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldDirectiveModule,
    IdDirectiveModule,
    MatInputDirectiveModule,
  ],
})
export class TextareaComponentModule {}
