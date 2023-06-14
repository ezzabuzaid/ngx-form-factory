import {
  Directive,
  forwardRef,
  inject,
  Injector,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl,
} from '@angular/forms';
import { ReplaySubject } from 'rxjs';

import { assertNotNullOrUndefined } from './utils';

@Directive({
  selector: '[ngxValueAccessor]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ValueAccessorDirective),
    },
  ],
})
export class ValueAccessorDirective implements OnChanges, ControlValueAccessor {
  #injector = inject(Injector);
  @Input('ngxValueAccessor') valueAccessor: ControlValueAccessor | null = null;

  #writeValue = new ReplaySubject<any>();
  #registerOnChange = new ReplaySubject<any>();
  #registerOnTouched = new ReplaySubject<any>();
  #setDisabledState = new ReplaySubject<any>();

  ngOnChanges(changes: SimpleChanges): void {
    if ('valueAccessor' in changes && this.valueAccessor) {
      const control = this.#injector.get(NgControl);
      control.valueAccessor = this.valueAccessor;
      const valueAccessor = control.valueAccessor;
      assertNotNullOrUndefined(valueAccessor, 'valueAccessor');
      this.#registerOnChange.subscribe((fn) => {
        valueAccessor.registerOnChange(fn);
      });
      this.#writeValue.subscribe((value) => {
        valueAccessor.writeValue(value);
      });
      this.#registerOnTouched.subscribe((fn) => {
        valueAccessor.registerOnTouched(fn);
      });
      this.#setDisabledState.subscribe((isDisabled) => {
        valueAccessor.setDisabledState?.(isDisabled);
      });

      this.#writeValue.complete();
      this.#registerOnChange.complete();
      this.#registerOnTouched.complete();
      this.#setDisabledState.complete();
    }
  }

  writeValue(obj: any): void {
    this.#writeValue.next(obj);
  }

  registerOnChange(fn: any): void {
    this.#registerOnChange.next(fn);
  }

  registerOnTouched(fn: any): void {
    this.#registerOnTouched.next(fn);
  }

  setDisabledState?(isDisabled: boolean): void {
    this.#setDisabledState.next(isDisabled);
  }
}
