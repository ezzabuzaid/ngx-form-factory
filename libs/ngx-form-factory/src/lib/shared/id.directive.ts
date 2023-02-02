import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

import { Field } from '../fields';
import { AbstractFieldFactoryComponent } from './field-factory.abstract';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'mat-select,[matInput],mat-checkbox,mat-radio-group',
  standalone: true,
})
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
