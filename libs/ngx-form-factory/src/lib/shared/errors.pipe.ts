import { Pipe, PipeTransform } from '@angular/core';

import { BaseField } from '../fields';

@Pipe({
  name: 'errors',
  standalone: true,
})
export class ErrorsPipe implements PipeTransform {
  transform(field: BaseField<any>): [string, () => string][] {
    return Object.entries(field.errorsMessages ?? {}).map(
      ([errorName, value]) => {
        return [
          errorName,
          typeof value === 'function' ? () => value(field.value) : () => value,
        ];
      }
    );
  }
}
