import { Component } from '@angular/core';
import { InternationalPhoneNumberField } from '@ezzabuzaid/ngx-form-factory';

@Component({
  selector: 'scrapx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'playground';
  n = new InternationalPhoneNumberField({
    appearance: 'fill',
    value: '+962792807794',
  });

  constructor() {
    this.n.valueChanges.subscribe(() => {
      console.log(this.n);
    });
  }
}
