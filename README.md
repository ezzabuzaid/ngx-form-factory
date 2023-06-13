# Form Factory

Don't forget to follow the project's author, [Ezz](https://github.com/ezzabuzaid), and consider starring the project to show your ❤️ and support

Form factory is an extension of Reactive Form Group/Control that makes create beautiful dynamic strong typed [Material](https://material.angular.io) forms easy!

## Motivation

After working on several Angular projects, i found myself copypasting the same forms over and over from project to another with minmal change to fields labels and names, and from here i decided to build a library that will make copypasting experiance easier ^^

One upon time I worked on project that will draw the layout and the forms dynamically based on response from an API with the most smallest coupling.

I've been using the same exact same HTML declaration always with little css adjustment to make them form fields shape differently.

therefore, I started working on this library with a goal of easy defining forms and fields with much less HTML boilerplate.

## Getting started

1. run `npm install @ezzabuzaid/ngx-form-factory` in your workspace directory
2. import `FormFactoryModule` in a feature module
3. create an instance of `Form` in a component and define your fields

```typescript
form = new Form({
  name: new Field({
    label: 'Name',
  }),
  birthdate: new DateField({
    label: 'Birthdate',
  }),
});
```

4. put the required markup

```html
<ngx-form-factory [formGroup]="form"></ngx-form-factory>
```

and here you go! all setup is done.

`ngx-form-factory` will loop over all defined form fields and create corresponding <mat-form-field> for each of them.
those fields will be included in a <mat-card> component to give them nice look.

| Property                 | Type       | Default                             | Description                                            |
| ------------------------ | ---------- | ----------------------------------- | ------------------------------------------------------ |
| formGroup                | @Input()   | undefined                           | Form instance                                          |
| title                    | @Input()   | undefined                           | Form title that will be shown in <mat-card-title>      |
| implicitFields           | @Input()   | true                                | whether you want auto create form                      |
| submitButton             | @Input()   | true                                | whether to show submit button or not                   |
| submitButtonDisableState | @Input()   | false                               | initial submit button disable state                    |
| autoValidateSubmitButton | @Input()   | true                                | whether you want auto disable and enable submit button |
| onSubmit                 | @Output()  | new EventEmitter< `SubmitEvent` >() | listen to submit button click                          |
| [form-header]            | ng-content |                                     | project HTML in `<mat-card-subtitle>`                  |

| [form-body] | ng-content | | project HTML in `<mat-card-content>` , handy when implicitFields is false so you can originize your fields as you need with `<ngx-form-field>`

| [form-footer] | ng-content | | project HTML in `<mat-card-actions>`

## API

The library has two important classes with additional options as argument

- `Form` extends `FormGroup` with additional instance methods, it take the same parameter as FormGroup class

- `Field(options: IFieldOptions)` extends `FormControl` with additional instance methods

  - `addValidator(validator)` add an array of Validator without lossing the existing ones

  - `getElement()` return the asocciated element with that `Field`

  - `on(eventName)` the same as `element.addEventListener(eventName, handler)` but instead it will return an `Observable`.

  * constructor(options)

- `DateField(options: IDateFieldOptions)`

- `SelectField(options: ISelectFieldOptions)`

- `TimeField(options: ITimeFieldOptions)`

- `RadioField(options: IRadioFieldOptions)`

- `RawField(options: IRawFieldOptions)`

  Special field type that takes a component to be used as field,
  have two important attributes, inputs and output that maps to component inputs and outputs.

  In case you have special or complex field you can utilize `RawField` to make it compatible with `Form` , it acts as Component Adaptar.

  Please see an example in `src/app/typeahead-field`

Other field types that only can be used with `Field` class

```typescript
export enum EFieldType {
  /**
   * Textarea field
   */
  TEXTAREA,
  /**
   * Basic field type, equal to input[type="password"]
   */
  PASSWORD,
  /**
   * Basic field type, equal to input[type="email"]
   */
  EMAIL,
  /**
   * Material checkbox
   */
  CHECKBOX,
  /**
   * Material radio field
   */
  RADIO,
  /**
   * Basic field type, equal to input[type="number"]
   */
  NUMBER,
  /**
   * Field type that using "intl-tel-input" library with material design to display countries dial-number
   */
  TEL,
  /**
   * Field type that used "intl-tel-input" library with material design to display list of countries
   */
  COUNTRY,
  /**
   * Field that will be registerd in the Form group without being shown in the DOM
   */
  HIDDEN,
}

const field = new Field({
  label: 'Some Label',
  type: EFieldType.TEXTAREA,
});
```

Note: `COUNTRY` and `TEL` types are using `intl-tel-input` library, so make sure to install it if you want to use it

## Example

- Form

```typescript
import { Form, SubmitEvent } from  '@ezzabuzaid/ngx-form-factory';

interface IUserInfo {
	name: string;
	age: number;
}

@Component({
	template:"<ngx-form-factory (onSubmit)="onSubmit($event)" [formGroup]="form"></ngx-form-factory>"
})
export class DumpComponent {

	public form = new Form<IUserInfo>({
		name: new Field({label: 'Name'}),
		age: new Field({label: 'Age', type: EFieldType.NUMBER})
	});

	onSubmit(event: SubmitEvent<IUserInfo>){
		if(event.valid){
			// call the server with event.value
		}
	}
}
```

- Standalone Field

You may want to create a field without Form at all, in this case all what you need is to create an instance of `Field`

```typescript
import {  Field } from  '@ezzabuzaid/ngx-form-factory';

@Component({
	template:"<ngx-form-field [field]="myField"></ngx-form-field>"
})
export class DumpComponent {

	public myField = new Field({ label: 'My Label' });

}
```

- RawField

```typescript

public form = new Form<IUserInfo>({
	user: new RawField(
		component: TypeaheadFieldComponent,
		inputs: {
			provider: of()
		},
		outputs:{}
	),
});

```

    Please check `src/app/typeahead-field` which contain detailed implemention of how you can consume and customize RawField as peer your need

## Classes

```typescript
interface IBaseFieldOptions<T> {
  /**
   * Group fields by section name
   *
   * used to reflow the fields to shape together in the HTML as line of maximum 3 fields
   */
  section?: string;
  /**
   * Give the field unique id to locate it's element in the DOM
   *
   * generate uniquly, unless you want to give it specific one
   */
  id?: string;
  /**
   * HTMLInputElement autocomplete
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
   */
  autocomplete?: string;
  /**
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   */
  validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;
  /**
   * @param asyncValidator A single async validator or array of async validator functions
   * @note quoted from Angular docs
   */
  asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null;
  /**
   * @param formState Initializes the control with an initial value,
   * or an object that defines the initial value and disabled state.
   */
  value?: T | { value: T; disabled: boolean };
  /**
   * type of the field that you want to
   */
  type?: EFieldType;
  /**
   * Object that represent the expected error names and the message for each of them to show
   *
   * {
   *  "required": "please enter some info, this field is required",
   *  "minlength": (value) => `${value.length} is less than the minumum length`,
   * }
   */
  errors?: { [key: string]: string | ((value: any) => string) };
}
```

```typescript
export interface IFieldOptions<T> extends IBaseFieldOptions<T> {
  /**
   * Field placeholder
   */
  label?: string;
  /**
   * small text to show underneath the field
   */
  hint?: string;
}
```

```typescript
interface IDateFieldOptions extends IFieldOptions<Date> {
  /**
   * Minumum allowed date to enter
   *
   * by default material date picker will disable anydate the comes before it
   */
  min?: Date;
  /**
   * Maximum allowed date to enter
   *
   * by default material date picker will disable anydate the comes after it
   */
  max?: Date;
}
```

```typescript
export class SelectOption {
  constructor(
    /**
     * The Label that will be shown in the select option
     */
    public value: string,
    /**
     * The value of the option that will be used as field value
     */
    public key?: string | number
  ) {
    if (isNullOrUndefined(this.key)) {
      this.key = this.value;
    }
  }
}

interface ISelectFieldOptions<T> extends IFieldOptions<T> {
  /**
   * An Observable that will return List of SelectOption
   *
   * Observable made specifically for a use cases where the options will come from an API rather than hardcoded
   */
  options: Observable<SelectOption[]>;
  /**
   * Indicates if the select field is multiple select
   */
  multiple?: boolean;
}
```

```typescript
export interface ITimeFieldOptions extends IFieldOptions<string> {
  /**
   * Minumum allowed time to enter
   *
   * e.g: 10:02
   */
  min?: string;
  /**
     * Maximum allowed time to enter

     * e.g: 10:02
     */
  max?: string;
}
```

```typescript
interface IRawFieldOptions<T> extends IBaseFieldOptions<T> {
  /**
   * the component which will act as field
   */
  component: Type<ControlValueAccessor>;
  /**
   * Component inputs
   */
  inputs?: { [key: string]: any };
  /**
   * Component outputs
   */
  outputs?: {
    [key: string]: (event: any) => any;
  };
}
```

```typescript
interface IRadioFieldOptions<T> extends IFieldOptions<T> {
  /**
   * An Observable that will return List of SelectOption
   *
   * Observable made specifically for a use cases where the options will come from an API rather than hardcoded
   */
  options: Observable<SelectOption[]>;
}
```

## Contributing

Don't hesitate to open issues and make a pull request to help improve code

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Versioning

This library will be maintained under the semantic versioning guidelines.
Releases will be numbered with the following format:
`<major>.<minor>.<patch>`

For more information on SemVer, please visit http://semver.org.

## Developer

##### [Ezzabuzaid](mailto:ezzabuzaid@hotmail.com)

- [GitHub](https://github.com/ezzabuzaid)
- [Linkedin](https://www.linkedin.com/in/ezzabuzaid)

## License

##### The MIT License (MIT)
