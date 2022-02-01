import { NgModule } from '@angular/core';
import { FactoryModule } from './factory';

@NgModule({
    exports: [
        FactoryModule
    ],
    imports: [
        FactoryModule
    ]
})
export class FormFactoryModule { }
