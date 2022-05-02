import { AbstractControl, ValidatorFn } from '@angular/forms';

/**
 *
 * @param id The id refer to input id
 */
export function PhoneNumberAssociatedWithCountryValidator(id: string): ValidatorFn {
   return (control: AbstractControl): { [key: string]: any } | null => {
      const input = document.getElementById(id);
      if (input) {
         const inst = (window as any).intlTelInputGlobals.getInstance(input);
         if (inst) {
            return inst.isValidNumber() ? null : { not_associated: true };
         }
      }
      return null;
   };
}
