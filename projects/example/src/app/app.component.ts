import { Component } from '@angular/core';
import { Form, Field, EFieldType, TimeField } from '@ezzabuzaid/ngx-form-factory';

interface IForm {
  datetime: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';
  form = new Form<IForm>({
    datetime: new TimeField({ type: EFieldType.TIME, label: 'Test' }),
  });
  constructor() { }
}
