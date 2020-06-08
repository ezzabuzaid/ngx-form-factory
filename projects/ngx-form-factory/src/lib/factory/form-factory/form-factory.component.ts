import { Component, EventEmitter, HostBinding, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Form } from '../../fields/base';
import { FormFactoryManager } from '../form-factory.manager';
export interface SubmitEvent<T = any> {
  value: T;
  valid: boolean;
}
@Component({
  selector: 'ngx-form-container',
  templateUrl: './form-factory.component.html',
  styleUrls: ['./form-factory.component.scss']
})
export class FormFactoryComponent implements OnInit, OnDestroy {
  public readonly progressListener = this.formWidgetManager.watch();
  private readonly subscription = new Subject();
  @Output() public readonly onSubmit = new EventEmitter<SubmitEvent>();
  @Input() public title: string = null;
  @Input() formGroup: Form<any>;
  @Input() external = false;
  @HostBinding('class.loading') public loading = false;
  fields = [];
  sections = [];

  constructor(
    private readonly formWidgetManager: FormFactoryManager
  ) { }

  ngOnInit() {
    this.progressListener
      .pipe(takeUntil(this.subscription))
      .subscribe(show => {
        this.loading = show;
      });
    this.fields = this.groupBySection(this.sortBySection(this.flattenFields(Object.values(this.formGroup?.fields))));
  }

  submit() {
    this.onSubmit.emit({
      value: this.formGroup.value,
      valid: this.formGroup.valid
    });
  }

  ngOnDestroy() {
    this.subscription.next(null);
    this.subscription.complete();
  }

  isForm(field: any) {
    return field instanceof Form;
  }

  private flattenFields(fields: any[]) {
    return fields.reduce((acc, field) => {
      if (this.isForm(field)) {
        acc.push(...this.flattenFields(field.fields));
      } else {
        acc.push(field);
      }
      return acc;
    }, []);
  }

  private groupBySection(fields: any[]) {
    return fields.reduce((acc, curr) => {
      if (!acc[curr.section]) {
        this.sections.push(curr.section);
        acc[curr.section] = [];
      }
      acc[curr.section].push(curr);
      return acc;
    }, {});
  }

  private sortBySection(fields: any[]) {
    return fields.sort((a, b) => a.section - b.section);
  }

}
