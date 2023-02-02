import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { Component, forwardRef, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { TextareaField } from '../../fields';
import {
  AbstractFieldFactoryComponent,
  IdDirective,
  MatFormFieldDirective,
} from '../../shared';
import { ErrorsPipe } from '../../shared/errors.pipe';
import { MatInputDirective } from '../../shared/mat-input.directive';

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
    // Local Directives
    MatFormFieldDirective,
    IdDirective,
    MatInputDirective,
    ErrorsPipe,
  ],
})
export class TextareaComponentModule {}
