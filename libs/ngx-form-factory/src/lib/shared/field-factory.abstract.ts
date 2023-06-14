import { Directive, Input } from '@angular/core';

import { BaseField } from '../fields';

@Directive()
export abstract class AbstractFieldFactoryComponent<
  TField extends BaseField<any>
> {
  @Input({ required: true }) field!: TField;
}
