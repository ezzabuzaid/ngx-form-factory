import { Component } from '@angular/core';
import { Field, Form } from 'ngx-form-factory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-factory';
  form = new Form({
    test: new Field({ label: "test" })
  })
}
