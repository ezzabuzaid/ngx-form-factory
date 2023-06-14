import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  OnInit,
} from '@angular/core';

import { EFieldType } from '../../fields';
import { BaseField, EnhancedForm, Form } from '../../fields/base';
import { assertNotNullOrUndefined } from '../../shared';
import { FieldFactoryComponentModule } from '../field-factory/field-factory.component';

@Component({
  selector: 'ngx-form-factory',
  templateUrl: './form-factory.component.html',
  styleUrls: ['./form-factory.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFactoryComponent implements OnInit {
  @Input({ required: true }) formGroup!: Form<any>;
  @Input() implicitFields = true;

  sectionsNames: string[] = [];
  sections!: { [key: string]: BaseField<any>[] };

  ngOnInit() {
    assertNotNullOrUndefined(this.formGroup);

    const fields = flattenFields(Object.values(this.formGroup.fields)).filter(
      (it) => it.type !== EFieldType.HIDDEN
    );

    this.sectionsNames = [...new Set(fields.map((field) => field.section))];
    this.sections = groupBySection(fields);
  }
}

export function flattenFields(controls: EnhancedForm<any>[string][]) {
  return controls.reduce<BaseField<any>[]>((acc, control) => {
    if (control instanceof BaseField) {
      acc.push(control);
    } else {
      acc.push(...flattenFields(Object.values(control.fields)));
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
  }, {} as Record<string, any[]>);
}
@NgModule({
  declarations: [FormFactoryComponent],
  imports: [CommonModule, FieldFactoryComponentModule],
  exports: [FormFactoryComponent],
})
export class FormFactoryComponentModule {}
