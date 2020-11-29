import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { DateField, Field, Form } from 'ngx-form-factory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-factory';
  form = new Form({
    name: new Field({
      label: "Name",
      validatorOrOpts: [Validators.required, Validators.minLength(5)],
      errors: {
        'required': 'required message',
        'minlength': (value) => `minLength message ${ value?.length }`,
      }
    }),
    age: new Field({
      label: "Age",
    }),
    birthdate: new DateField({
      label: "Birthdate",
    })
  })
}
