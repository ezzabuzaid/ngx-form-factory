import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AppUtils, typeaheadOperator } from '@core/helpers/utils';
import { BaseField, IRawFieldComponent, SelectOption } from '@ezzabuzaid/ngx-form-factory';
import { UsersService } from '@shared/services';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators';
@Component({
  selector: 'app-typeahead-field',
  templateUrl: './typeahead-field.component.html',
  styleUrls: ['./typeahead-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypeaheadFieldComponent implements OnInit, IRawFieldComponent<string>, OnDestroy {
  subscription = new Subject();
  formControl: BaseField<string>;

  options = [];

  @Input() label: string;
  @Input() provider: (term: string) => Observable<SelectOption[]>;
  constructor(
    private cdf: ChangeDetectorRef
  ) { }

  displayFn = (value: string) => {
    const option = this.options.find(_ => _.id === value);
    if (option) {
      return option.name;
    }
    return '';
  }

  ngOnInit(): void {

    if (AppUtils.isNullorUndefined(this.provider)) {
      throw new Error('provider input cannot be null');
    }

    this.formControl.valueChanges
      .pipe(
        takeUntil(this.subscription),
        tap(value => {
          if (AppUtils.isEmptyString(value)) {
            this.formControl.setValue(value, { emitEvent: false });
          }
        }),
        filter(value => value && value.length >= 3),
        typeaheadOperator((searchText) => this.provider(searchText))
      )
      .subscribe((options) => {
        this.options = options;
        this.cdf.markForCheck();
      });
  }

  ngOnDestroy() {
    AppUtils.unsubscribe(this.subscription);
  }

}
