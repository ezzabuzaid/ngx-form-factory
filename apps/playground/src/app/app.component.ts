import { Component } from '@angular/core';
import { PhoneNumberField } from '@ezzabuzaid/ngx-form-factory';

@Component({
  selector: 'scrapx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'playground';
  n = new PhoneNumberField({});
}
