# Form Factory

Don't forget to follow the project's author, [Ezz](https://github.com/ezzabuzaid), and consider starring the project to show your ❤️ and support

Form factory is an extension of Reactive Form Group/Control that gives the ability to dynamically create strong typed forms associated with only [Material](https://material.angular.io) theme, untill now at least.

## Getting started

1. run `npm install @ezzabuzaid/ngx-form-factory` in your workspace directory
2. Import the `FieldFactoryModule` , `FormFactoryModule` in your module

The library has two important classes

* `Form` extends `FormGroup` with additional instance methods
	1. `getControlValue(controlName, defaultValue)` returns the value of the specified control name and defaultValue if the value is null or undefined
	2. `hasControlError(controlName, errorName)` checks if the specified control name has an error
	3. `getName(controlName)` simple method that will return the same provided name, it mainly has been create to be used in HTML with `[formControlName]` directive, in case of name change the compiler will rise an error up
	4. `get(controlName)` the same one in `FormGroup` , but with typing

 

* `Field` extends `FormControl` with additional instance methods
	1. `addValidator(validator)` add an array of Validator without lossing the existing ones
	2. `getElement()` return the asocciated element with that `Field`
	3. `on(eventName)` the same as `element.addEventListener(eventName, handler)` but instead it will return an `Observable` that you easily apply your operator on top of it.

### Usage

 

``` 
 import {
	 FieldFactoryModule, FormFactoryModule
 } from  '@ezzabuzaid/ngx-form-factory';
 ```

3. Prepare your class representation of the Form (interface)
4. Create a `Form` instance in your component with the fields you want to show

``` 
interface IMyInterface {
	name: string;
	age: number;
}
public form = new Form<IMyInterface>({
	name: new Field({label: 'Name'}),
	age: new Field({label: 'Age'})
});
```

5. Add `<ngx-form-factory [formGroup]="form"></ngx-form-factory>` to your component HTML file

### Standalone `Field`

You may want to create a field without formGroup at all, in this case all what you need is to create an instance from `Field` or any corresponding extension

``` 
// AnyModule.module.ts
import { FieldFactoryModule } from '@ezzabuzaid/ngx-form-factory';
@NgModules({imports: [FieldFactoryModule]})
export class AnyModule {}

// AnyComponent.component.ts
import { FieldFactoryModule } from '@ezzabuzaid/ngx-form-factory';
public myField = new Field({ label: 'My Label' });

// AnyComponent.component.html
<ngx-form-field [field]="myField"></ngx-form-field>
```

### Other `Field` Types

Absouletly you want to have non-text fields such as `Select` , `Date` , ..etc
there's only some custom fields shipped with the library for now

* `Field`
A basic control with default `TEXT` type, **hint** and **label** options used with `<mat-hint>` and `<mat-option` >

* `DateField`
The same as Field with **`DATE`** type and additional `min` and `max` options used in validation

* `SelectField`
The same as Field with **`SELECT`** type and `multiple` option used to create **multiple** select type  and `options` for select items

`options` is list of `SelectOption` class

 `new SelectField({options: [new SelectOption('label', 'key')]})`
The available types could be found in `EFieldType` enum

* TEXT
* TEXTAREA
* DATE
* EMAIL
* PASSWORD
* CHECKBOX
* RADIO
* TEL
* COUNTRY

`COUNTRY` and `TEL` types are using `intl-tel-input` library, so make sure to install it if you want to use it

## Contributing

Don't hesitate to open issues and make a pull request to help improve code

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -m 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request :D

  

## Versioning

This library will be maintained under the semantic versioning guidelines.
Releases will be numbered with the following format:
 `<major>.<minor>.<patch>`
For more information on SemVer, please visit http://semver.org.

## Developer

##### [Ezzabuzaid](mailto:ezzabuzaid@hotmail.com)

* [GitHub](https://github.com/ezzabuzaid)
* [Linkedin](https://www.linkedin.com/in/ezzabuzaid)

## License

##### The MIT License (MIT)

# Built with love <3

<!--stackedit_data:
eyJoaXN0b3J5IjpbODI3Mzc5MTE2LDEzMzM3NTY0MjYsNTc0MT
AzNzQsLTE0NTA0Njk4NzIsLTU4Nzg0NjY3MiwtMTczMzU2MDE4
MSwyNjE4NjM1MTQsMTA2NjA1NDc0Miw3MTU5NDg2MTAsLTEzND
A3ODE2MjldfQ==
-->
