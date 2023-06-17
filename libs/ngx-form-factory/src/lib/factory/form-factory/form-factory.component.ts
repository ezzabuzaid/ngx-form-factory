import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  Pipe,
  PipeTransform,
} from '@angular/core';

import { EFieldType } from '../../fields';
import { BaseField, Form, NativeForm } from '../../fields/base';
import { FieldFactoryComponentModule } from '../field-factory/field-factory.component';

@Pipe({
  name: 'sectionizeFields',
  standalone: true,
})
export class SectionizeFieldsPipe implements PipeTransform {
  transform(form: Form<any>, ...args: any[]) {
    const fields = flattenFields(Object.values(form.controls)).filter(
      (it) => it.type !== EFieldType.HIDDEN
    );

    return {
      sections: [...new Set(fields.map((field) => field.section))],
      groups: groupBySection(fields),
    };
  }
}

@Component({
  selector: 'ngx-form-factory',
  templateUrl: './form-factory.component.html',
  styleUrls: ['./form-factory.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFactoryComponent {
  @Input({ required: true }) formGroup!: Form<any>;
  @Input() implicitFields = true;

  trackBy(index: number, item: BaseField<any>) {
    return item;
  }
}

export function flattenFields(controls: NativeForm<any>[string][]) {
  return controls.reduce<BaseField<any>[]>((acc, control) => {
    if ('controls' in control) {
      acc.push(...flattenFields(Object.values(control.controls)));
    } else {
      acc.push(control);
    }
    return acc;
  }, []);
}

export function groupBySection(fields: BaseField<any>[]) {
  return fields.reduce((acc, curr) => {
    const section = curr.section as unknown as string;
    if (!acc[section]) {
      acc[section] = [];
    }
    acc[section].push(curr);
    return acc;
  }, {} as Record<string, BaseField<any>[]>);
}
@NgModule({
  declarations: [FormFactoryComponent],
  imports: [CommonModule, FieldFactoryComponentModule, SectionizeFieldsPipe],
  exports: [FormFactoryComponent],
})
export class FormFactoryComponentModule {}
