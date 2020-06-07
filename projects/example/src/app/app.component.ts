import { Component } from '@angular/core';
import { Form } from 'dist/ngx-form-factory/lib/fields/base';
import { Field } from 'dist/ngx-form-factory/lib/fields';
import { DateField } from 'dist/ngx-form-factory/lib/fields/date';

interface User {
  username?: string;
  password?: string;
  mobile?: string;
  age?: number;
  created_at?: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';
  form = new Form<User>({
    age: new Field(),
    created_at: new DateField()
  });
  constructor() { }
}
