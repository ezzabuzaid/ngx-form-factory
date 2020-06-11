# Form Factory

Don't forget to follow the project's author, [Ezz](https://github.com/ezzabuzaid), and consider starring the project to show your ❤️ and support

Form factory is an extension of Reactive Form Group/Control that gives the ability to dynamically create strong typed forms associated with only [Material](https://material.angular.io) theme, untill now at least.

## Installition
The library has two important classes that correlates to
* `Form` extends `FormGroup`  with additional instance methods
	1. `getControlValue(controlName, defaultValue)` returns the value of the specified control name and defaultValue if the value is null or undefined
	2. `hasControlError(controlName, errorName)` checks if the specified control name has an error
	3. `getName(controlName)` simple method that will return the same provided name, it mainly has been create to be used in HTML with `[formControlName]` directive, in case of name change the compiler will rise an error up
	4. `get(controlName)` the same one in `FormGroup`, but with typing
 
* `Field` extends `FormControl` with additional instance methods
	1. `addValidator(validator)` add an array of Validator without lossing the existing ones
	2. `getElement()` return the asocciated element with that `Field`
	3. `on(eventName)` the same as `element.addEventListener(eventName, handler)` but instead it will return an `Observable` that you easily apply your operator on top of it.

3. `npm install @ezzabuzaid/ngx-form-factory`

4. Import the `FieldFactoryModule`, `FormFactoryModule` in your module
 ```
 import {
	 FieldFactoryModule, FormFactoryModule
 } from  '@ezzabuzaid/ngx-form-factory';
 ```
5. Add `<ngx-form-factory></ngx-form-factory>`  to your component HTML file
6. Create 

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
eyJoaXN0b3J5IjpbLTE0NTA0Njk4NzIsLTU4Nzg0NjY3MiwtMT
czMzU2MDE4MSwyNjE4NjM1MTQsMTA2NjA1NDc0Miw3MTU5NDg2
MTAsLTEzNDA3ODE2MjldfQ==
-->