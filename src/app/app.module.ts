import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NgxFormFactoryModule } from '@ezzabuzaid/ngx-form-factory';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxFormFactoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
