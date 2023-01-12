import { NgModule } from '@angular/core';

import { FieldFactoryComponentModule } from './factory/field-factory/field-factory.component';
import { FormFactoryComponentModule } from './factory/form-factory/form-factory.component';

/**
 * @deprecated Use NgxFormFactoryModule instead
 */
@NgModule({
  imports: [FieldFactoryComponentModule, FormFactoryComponentModule],
  exports: [FieldFactoryComponentModule, FormFactoryComponentModule],
})
export class FormFactoryModule {}
@NgModule({
  imports: [FieldFactoryComponentModule, FormFactoryComponentModule],
  exports: [FieldFactoryComponentModule, FormFactoryComponentModule],
})
export class NgxFormFactoryModule {}
