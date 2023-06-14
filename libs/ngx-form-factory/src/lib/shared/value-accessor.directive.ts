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
import { AsyncSubject, BehaviorSubject, take } from 'rxjs';

import { assertNotNullOrUndefined } from './utils';

@Directive({
  selector: '[ngxValueAccessor]',
  standalone: true,
  exportAs: 'ngxValueAccessor',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ValueAccessorDirective),
    },
  ],
})
export class ValueAccessorDirective implements OnChanges, ControlValueAccessor {
  readonly #injector = inject(Injector);
  @Input('ngxValueAccessor') valueAccessor: ControlValueAccessor | null = null;

  readonly #values = new BehaviorSubject<any[]>([]);
  readonly #disabledStates = new BehaviorSubject<any[]>([]);

  readonly #onChange = new AsyncSubject();
  readonly #onTouched = new AsyncSubject();

  ngOnChanges(changes: SimpleChanges): void {
    if ('valueAccessor' in changes && this.valueAccessor) {
      const control = this.#injector.get(NgControl);
      control.valueAccessor = this.valueAccessor;
      const valueAccessor = control.valueAccessor;
      assertNotNullOrUndefined(valueAccessor, 'valueAccessor');
      this.#values.pipe(take(1)).subscribe((values) => {
        values.forEach((value) => {
          valueAccessor.writeValue(value);
        });
        this.#values.complete();
      });

      this.#disabledStates.pipe(take(1)).subscribe((values) => {
        values.forEach((value) => {
          valueAccessor.setDisabledState?.(value);
        });

        this.#disabledStates.complete();
      });

      this.#onChange.subscribe((fn) => {
        valueAccessor.registerOnChange(fn);
      });
      this.#onTouched.subscribe((fn) => {
        valueAccessor.registerOnTouched(fn);
      });
    }
  }

  writeValue(obj: any): void {
    this.#values.next(this.#values.getValue().concat(obj));
  }

  registerOnChange(fn: any): void {
    this.#onChange.next(fn);
    this.#onChange.complete();
  }

  registerOnTouched(fn: any): void {
    this.#onTouched.next(fn);
    this.#onTouched.complete();
  }

  setDisabledState?(isDisabled: boolean): void {
    this.#disabledStates.next(
      this.#disabledStates.getValue().concat(isDisabled)
    );
  }
}
