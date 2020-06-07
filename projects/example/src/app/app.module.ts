import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormContainerModule } from 'ngx-form-factory';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
