# Form Factory

Don't forget to follow the project's author, [Ezz](https://github.com/ezzabuzaid), and consider starring the project to show your ❤️ and support

Form factory is an extension of Reactive Form Group/Control that gives the ability to dynamically create strong typed forms associated with only [Material](https://material.angular.io) theme, untill now at least.

## Getting started
The library has two important classes
* `Form` extends `FormGroup`  with additional instance methods
	1. `getControlValue(controlName, defaultValue)` returns the value of the specified control name and defaultValue if the value is null or undefined
	2. `hasControlError(controlName, errorName)` checks if the specified control name has an error
	3. `getName(controlName)` simple method that will return the same provided name, it mainly has been create to be used in HTML with `[formControlName]` directive, in case of name change the compiler will rise an error up
	4. `get(controlName)` the same one in `FormGroup`, but with typing
 
* `Field` extends `FormControl` with additional instance methods
	1. `addValidator(validator)` add an array of Validator without lossing the existing ones
	2. `getElement()` return the asocciated element with that `Field`
	3. `on(eventName)` the same as `element.addEventListener(eventName, handler)` but instead it will return an `Observable` that you easily apply your operator on top of it.

### Installation & Usage
1. run `npm install @ezzabuzaid/ngx-form-factory` in your workspace directory
2. Import the `FieldFactoryModule`, `FormFactoryModule` in your module
 ```
 import {
	 FieldFactoryModule, FormFactoryModule
 } from  '@ezzabuzaid/ngx-form-factory';
 ```
3. Prepare your class representation of the Form
4. Create an instance of `Form` in your component with the fields you want to show
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
5. Add `<ngx-form-factory [formGroup]="form"></ngx-form-factory>`  to your component HTML file

### Standalone `Field`
You may want to create a field without formGroup at all, in this case all what you need is to c


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
- [GitHub](https://github.com/ezzabuzaid)
- [Linkedin](https://www.linkedin.com/in/ezzabuzaid)

## License
##### The MIT License (MIT)

# Built with love <3
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTc5MDkyMjE5Miw1NzQxMDM3NCwtMTQ1MD
Q2OTg3MiwtNTg3ODQ2NjcyLC0xNzMzNTYwMTgxLDI2MTg2MzUx
NCwxMDY2MDU0NzQyLDcxNTk0ODYxMCwtMTM0MDc4MTYyOV19
-->