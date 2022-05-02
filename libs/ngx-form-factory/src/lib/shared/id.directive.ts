import {
  AfterViewInit,
  Directive,
  ElementRef,
  NgModule,
  Renderer2,
} from '@angular/core';

import { Field } from '../fields';
import { AbstractFieldFactoryComponent } from './field-factory.abstract';

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: 'mat-select,[matInput],mat-checkbox,mat-radio-group' })
export class IdDirective implements AfterViewInit {
  constructor(
    private _fieldFactory: AbstractFieldFactoryComponent<Field<any>>,
    private _renderer: Renderer2,
    private _elementRef: ElementRef<HTMLElement>
  ) {}

  public ngAfterViewInit(): void {
    this._renderer.setAttribute(
      this._elementRef.nativeElement,
      'id',
      this._fieldFactory.field.id
    );
  }
}

@NgModule({
  declarations: [IdDirective],
  exports: [IdDirective],
})
export class IdDirectiveModule {}
