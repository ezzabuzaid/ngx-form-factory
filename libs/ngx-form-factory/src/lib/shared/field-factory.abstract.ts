import { Directive, Input } from '@angular/core';

import { IField } from '../fields';

@Directive()
export abstract class AbstractFieldFactoryComponent<
  TField extends IField<any>
> {
  @Input() field!: TField;
}
