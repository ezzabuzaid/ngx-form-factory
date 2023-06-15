# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

## [5.2.0](https://github.com/ezzabuzaid/ngx-form-factory/compare/v5.1.0...v5.2.0) (2023-06-15)


### Features

* **FormFactory:** add support for dynamically added fields ([fef4dfc](https://github.com/ezzabuzaid/ngx-form-factory/commit/fef4dfc48f6e0f3ce0786558d655b2dfaa994d4d))
* **Form:** use angular controls instead of fields ([cf415db](https://github.com/ezzabuzaid/ngx-form-factory/commit/cf415db9373bfee306b1c2b29e6c6e61ef10f03a))

## [5.1.0](https://github.com/ezzabuzaid/ngx-form-factory/compare/v5.0.1...v5.1.0) (2023-06-14)


### Features

* **FormFactory:** make formGroup required ([ba0c938](https://github.com/ezzabuzaid/ngx-form-factory/commit/ba0c938b64db12d3526c4ebb723e6f15556fb27b))

### [5.0.1](https://github.com/ezzabuzaid/ngx-form-factory/compare/v5.0.0...v5.0.1) (2023-06-14)


### Bug Fixes

* **RawField:** replay all the events from the wrapper value accessor to the raw field ([eaa182c](https://github.com/ezzabuzaid/ngx-form-factory/commit/eaa182c58bb96b467014c5b3ddadcefa7c83d65c))

## [5.0.0](https://github.com/ezzabuzaid/ngx-form-factory/compare/v4.0.4...v5.0.0) (2023-06-14)


### ⚠ BREAKING CHANGES

* **RawField:** replace IRawField with ControlValueAccessor
* **angular:** upgrade to angular 16

### Features

* **RawField:** replace IRawField with ControlValueAccessor ([61da36f](https://github.com/ezzabuzaid/ngx-form-factory/commit/61da36f26dbc6ba0b9a88b8fc80cbbb090d852d9))


### Miscellaneous Chores

* **angular:** upgrade to angular 16 ([649a195](https://github.com/ezzabuzaid/ngx-form-factory/commit/649a195e62b629b4ed6453766614b82ac727cdd6))

### [4.0.4](https://github.com/ezzabuzaid/ngx-form-factory/compare/v4.0.3...v4.0.4) (2023-05-20)


### Bug Fixes

* **FormFactory:** don't render HIDDEN fields ([e9eeaad](https://github.com/ezzabuzaid/ngx-form-factory/commit/e9eeaad29c8d8c10aa332c3e98c8316fdbc6981f))

### [4.0.3](https://github.com/ezzabuzaid/ngx-form-factory/compare/v4.0.2...v4.0.3) (2023-03-08)

### [4.0.2](https://github.com/ezzabuzaid/ngx-form-factory/compare/v4.0.1...v4.0.2) (2023-02-02)


### Bug Fixes

* **MaskField:** remove default value for mask ([bca8c60](https://github.com/ezzabuzaid/ngx-form-factory/commit/bca8c60ccd0dc0ca339427ad1293ad30bfc67639))

### [4.0.1](https://github.com/ezzabuzaid/ngx-form-factory/compare/v4.0.0...v4.0.1) (2023-01-26)

## [4.0.0](https://github.com/ezzabuzaid/ngx-form-factory/compare/v3.0.0...v4.0.0) (2023-01-25)


### ⚠ BREAKING CHANGES

* **PasswordField:** remove custom styling, export PasswordDirective as standalone

### Bug Fixes

* **RawField:** remove 'errorsMessages' property ([89fe2ae](https://github.com/ezzabuzaid/ngx-form-factory/commit/89fe2ae73e4ca5df41709c1bcf6b24c109369c59))
* remove 'type' property from RawField ([c880a22](https://github.com/ezzabuzaid/ngx-form-factory/commit/c880a22a3c8728cfb96ee38366e014f2f3efe0b2))


### Code Refactoring

* **PasswordField:** remove custom styling, export PasswordDirective as standalone ([746f188](https://github.com/ezzabuzaid/ngx-form-factory/commit/746f18824fcc867c5f63a36eaf46bebc2c57ede2))

## [3.0.0](https://github.com/ezzabuzaid/ngx-form-factory/compare/v2.1.0...v3.0.0) (2023-01-22)


### ⚠ BREAKING CHANGES

* **Form:** remove helper method as they are obsolete with typed forms
* **Field:** name errors to errorsMessages

### Features

* **Form:** add ability to manage control after init ([20e945b](https://github.com/ezzabuzaid/ngx-form-factory/commit/20e945bec37678c3280fd41ea311bee7c5226de1))


### Code Refactoring

* **Field:** name errors to errorsMessages ([8f214ab](https://github.com/ezzabuzaid/ngx-form-factory/commit/8f214abbde3770e273f8264488db34af1e05fd4d))
* **Form:** remove helper method as they are obsolete with typed forms ([d66785b](https://github.com/ezzabuzaid/ngx-form-factory/commit/d66785b681b952f78ddd6f6b9881bad7240405f1))

## [2.1.0](https://github.com/ezzabuzaid/ngx-form-factory/compare/v2.0.6...v2.1.0) (2023-01-21)


### Features

* **FieldFactory:** add prefix and suffix icons to fields ([6e69a61](https://github.com/ezzabuzaid/ngx-form-factory/commit/6e69a6175ad99f1903f382c56bbf4ab31f2b463a))

### [2.0.6](https://github.com/ezzabuzaid/ngx-form-factory/compare/v2.0.5...v2.0.6) (2023-01-14)


### Bug Fixes

* **Checkbox:** add missing MatCheckboxModule ([2b01290](https://github.com/ezzabuzaid/ngx-form-factory/commit/2b01290021ea2173223936ad2f397d5b00d37ea6))
* **mat-form-field:** add subscriptSizing option ([109b233](https://github.com/ezzabuzaid/ngx-form-factory/commit/109b2331906babb408c717d85952781a9d997e80))

### [2.0.5](https://github.com/ezzabuzaid/ngx-form-factory/compare/v2.0.4...v2.0.5) (2023-01-13)

### [2.0.4](https://github.com/ezzabuzaid/ngx-form-factory/compare/v2.0.3...v2.0.4) (2023-01-13)

### [2.0.3](https://github.com/ezzabuzaid/ngx-form-factory/compare/v2.0.2...v2.0.3) (2023-01-13)

### [2.0.2](https://github.com/ezzabuzaid/ngx-form-factory/compare/v2.0.1...v2.0.2) (2023-01-12)

### [2.0.1](https://github.com/ezzabuzaid/ngx-form-factory/compare/v2.0.0...v2.0.1) (2023-01-12)

## [2.0.0](https://github.com/ezzabuzaid/ngx-form-factory/compare/v1.1.4...v2.0.0) (2023-01-12)


### ⚠ BREAKING CHANGES

* update angular and angular material to v15
* **CountryField:** remove intl-tel-input dependency

### Features

* **CountryField:** remove intl-tel-input dependency ([f9dc8b5](https://github.com/ezzabuzaid/ngx-form-factory/commit/f9dc8b55c2f407dcbf7180861615b4270f906552))


### Bug Fixes

* **CountryField:** set country name as aria-label to activate keyboard search ([db840a3](https://github.com/ezzabuzaid/ngx-form-factory/commit/db840a3f4fe981f930d9439f5d298a9befc4f3d3))


### Miscellaneous Chores

* update angular and angular material to v15 ([bbc5dd9](https://github.com/ezzabuzaid/ngx-form-factory/commit/bbc5dd91b1d5eab211d6ab0b33a8628220b56637))

### [1.1.4](https://github.com/ezzabuzaid/ngx-form-factory/compare/v1.1.3...v1.1.4) (2022-05-02)

### Bug Fixes

- restrict properties to their corresponding fields ([32b707a](https://github.com/ezzabuzaid/ngx-form-factory/commit/32b707aed8674fbde9c554993ee6d583add51c28))

### [1.1.4-beta.1](https://github.com/ezzabuzaid/ngx-form-factory/compare/1.1.4-beta.0...1.1.4-beta.1) (2022-05-02)

### Bug Fixes

- restrict properties to their corresponding fields ([32b707a](https://github.com/ezzabuzaid/ngx-form-factory/commit/32b707aed8674fbde9c554993ee6d583add51c28))

### [1.1.4-beta.0](https://github.com/ezzabuzaid/ngx-form-factory/compare/v1.1.3...v1.1.4-beta.0) (2022-05-02)

### 0.0.1-beta.0 (2022-04-20)

### [1.1.3](https://github.com/ezzabuzaid/ngx-form-factory/compare/v1.1.2...v1.1.3) (2022-02-25)

### Bug Fixes

- **DateField:** add support for matDatepickerFilter ([4509a13](https://github.com/ezzabuzaid/ngx-form-factory/commit/4509a135dd5df1f10966330a90ef4afeb248c390))

### [1.1.2](https://github.com/ezzabuzaid/ngx-form-factory/compare/v1.1.1...v1.1.2) (2022-02-13)

### Bug Fixes

- **DateField:** pass DatePicker instance to monthSelected and yearSelected ([578c51f](https://github.com/ezzabuzaid/ngx-form-factory/commit/578c51fd05122c300ffbe7a96146ff02028525a4))

### [1.1.1](https://github.com/ezzabuzaid/ngx-form-factory/compare/v1.1.0...v1.1.1) (2022-02-13)

### Bug Fixes

- **DateField:** pass to monthSelected and yearSelected ([7821c59](https://github.com/ezzabuzaid/ngx-form-factory/commit/7821c5955fac8a13c74ebf0b104bf0daba827954))

## [1.1.0](https://github.com/ezzabuzaid/ngx-form-factory/compare/v1.0.4...v1.1.0) (2022-02-13)

### Features

- add class property to mat-form-field ([36977e1](https://github.com/ezzabuzaid/ngx-form-factory/commit/36977e1331c59876265ebc8f97515d7ac5565670))

### Bug Fixes

- **DateField:** add startView, startAt, monthSelected, and yearSelected ([6f67375](https://github.com/ezzabuzaid/ngx-form-factory/commit/6f673754a38db6d1871dc3c270c24bdc1f7bb36c))
- replace initialValue with value ([41bf84f](https://github.com/ezzabuzaid/ngx-form-factory/commit/41bf84fdf6a3a678a167f3baf6076b10243cd133))
- some mat-hint were missing for some fields ([09e910b](https://github.com/ezzabuzaid/ngx-form-factory/commit/09e910beaa2096a0ac47642610cc204a2b3ce42a))

### [1.0.5](https://github.com/ezzabuzaid/ngx-form-factory/compare/v1.0.4...v1.0.5) (2022-02-06)

### Bug Fixes

- some mat-hint were missing for some fields ([09e910b](https://github.com/ezzabuzaid/ngx-form-factory/commit/09e910beaa2096a0ac47642610cc204a2b3ce42a))

### [1.0.4](https://github.com/ezzabuzaid/ngx-form-factory/compare/v1.0.3...v1.0.4) (2022-02-06)

### Bug Fixes

- **RawField:** add componentInstance to raw field ([60bbf15](https://github.com/ezzabuzaid/ngx-form-factory/commit/60bbf15e1bc1137946b01a39f87d19fc08f1aeb9))

### [1.0.3](https://github.com/ezzabuzaid/ngx-form-factory/compare/v1.0.2...v1.0.3) (2022-02-06)

### Bug Fixes

- **RawField:** assign missing formControl to raw field component ([da8ae2c](https://github.com/ezzabuzaid/ngx-form-factory/commit/da8ae2c70f27ccd8fcaf3398b0ba6f95550a1309))

### [1.0.2](https://github.com/ezzabuzaid/ngx-form-factory/compare/v1.0.1...v1.0.2) (2022-02-03)

### Bug Fixes

- **FormFactory:** assign defaults to submitButtonOptions ([f560053](https://github.com/ezzabuzaid/ngx-form-factory/commit/f56005339efb9c3c87d1e064d3e891f1d292f004))

### [1.0.1](https://github.com/ezzabuzaid/ngx-form-factory/compare/v1.0.0...v1.0.1) (2022-02-03)

## [1.0.0](https://github.com/ezzabuzaid/ngx-form-factory/compare/v0.7.0...v1.0.0) (2022-02-03)

### ⚠ BREAKING CHANGES

- this will affect your codebase
- use it instead of EFieldType.TEXTAREA
- this will allow better styling of header and footer. form-body still working as is, but will be removed in future releases
- removed in favor of FormControl addValidators
- **SelectOption:** changing the position of value parameter and change key property to label

### Features

- add appearance, floatLabel, and hideRequiredMarker as field options ([5fcd513](https://github.com/ezzabuzaid/ngx-form-factory/commit/5fcd5135097d0fba896e320cce8f5d236ee8e1ec))
- add mask field using @ngneat/input-mask and inputmask ([21f2025](https://github.com/ezzabuzaid/ngx-form-factory/commit/21f20255d43022eff462291a6b4d7f13eb80d1f0))
- add placeholder, readonly, maxlength, and minlength to all fields ([e7c75a4](https://github.com/ezzabuzaid/ngx-form-factory/commit/e7c75a4a5f7fec66ebfc5461c769c442f0c6eace))
- add storybook for demo and docs ([6491680](https://github.com/ezzabuzaid/ngx-form-factory/commit/64916807b58753f9e6c855c18349d346af508036))
- add Textarea field with additional properties ([a5c7911](https://github.com/ezzabuzaid/ngx-form-factory/commit/a5c791108f9cf7341cf7acb357d53b31ff00ba98))

### Bug Fixes

- **SelectOption:** use value as option value instead of label ([d8845a5](https://github.com/ezzabuzaid/ngx-form-factory/commit/d8845a5a9213438da3302a33d6bc17753586bc8d))
- **TimeField:** add missing min and max validators ([45fa8d2](https://github.com/ezzabuzaid/ngx-form-factory/commit/45fa8d217d6e71e9f6a0ff459356d4aad5349499))

### Code Refactoring

- group submit button inputs under object options ([bc495d4](https://github.com/ezzabuzaid/ngx-form-factory/commit/bc495d48d76923f0b49c2a8601092ce9bfa69c08))
- remove addValidator from base field class ([881924f](https://github.com/ezzabuzaid/ngx-form-factory/commit/881924fef279530aa43ed0c798234b99dc699cd9))
- remove mat-card from form factory component ([9f06585](https://github.com/ezzabuzaid/ngx-form-factory/commit/9f0658523729e00ec401b4dac8d1a95e2cdc5832))

## [0.7.0](https://github.com/ezzabuzaid/ngx-form-factory/compare/v0.7.0...v1.0.0) (2020-12-05)

### Features

- add options for each field to make it easy to use ([157038c](https://github.com/ezzabuzaid/ngx-form-factory/commit/157038c970eafc628187d586e9ee12495f622bfb))
- add TimeField ([fe9b097](https://github.com/ezzabuzaid/ngx-form-factory/commit/fe9b0971d4e25669974f4ee7b68740af5856f8c9))
- **base-fields:** use unique default section to shape each field as row ([82438c5](https://github.com/ezzabuzaid/ngx-form-factory/commit/82438c5647f13960fe35136029852cbe5529e6f0))
- **FieldFactory:** add inputs and outputs properties to RawField ([2bfaa67](https://github.com/ezzabuzaid/ngx-form-factory/commit/2bfaa67068d0d7c21f2fef51b320103302a42627))
- **form-factory-manager:** imporve it by adding explict method to manipulate the progress bar ([6a152d3](https://github.com/ezzabuzaid/ngx-form-factory/commit/6a152d3620d134d3857965371d149ac70a0701f8))
- **form-factory:** provide options to hide submit ([caf5ea2](https://github.com/ezzabuzaid/ngx-form-factory/commit/caf5ea24725ac9eb4db52df28b475c29eabc9161))
- **form-factory:** shape fields based on section name ([ae300ce](https://github.com/ezzabuzaid/ngx-form-factory/commit/ae300ce4d66cf7d9031957aa11cfd20b78e62698))
- **FormContainer:** add helper method to disable and enable submit button ([d72d8ec](https://github.com/ezzabuzaid/ngx-form-factory/commit/d72d8ec33270c022a181c1d2b34b34d8b3797031))
- make all options as optionally ([2c86fca](https://github.com/ezzabuzaid/ngx-form-factory/commit/2c86fca44c3b6c837b7b4ea32647218c9fd222a4))

### Bug Fixes

- **BaseField:** correctly assign the incoming value ([7e163d9](https://github.com/ezzabuzaid/ngx-form-factory/commit/7e163d9b026bdbf90c1d219c64aa7d2e553d6207))
- disable ivy ([d8a9ed1](https://github.com/ezzabuzaid/ngx-form-factory/commit/d8a9ed1ebe5cdacaa7fa5fa9bc80383ebe5e94bc))
- disable ivy ([c2456ad](https://github.com/ezzabuzaid/ngx-form-factory/commit/c2456ad92de160b704745072086944a426edcba3))
- export all options type, make type and value optional ([a3991c5](https://github.com/ezzabuzaid/ngx-form-factory/commit/a3991c5c9943dad36aaffebd06da9230c80fc616))
- **field-factory:** import MatInputModule ([404c441](https://github.com/ezzabuzaid/ngx-form-factory/commit/404c4412883f546d42cd11458713af36f9b725bc))
- **FieldFactory:** use empty object if inputs, outputs not provided ([fb15c25](https://github.com/ezzabuzaid/ngx-form-factory/commit/fb15c2573ec6f2559cf45a1e56e303712a7a4f16))
- fields are not streaching properly ([0941727](https://github.com/ezzabuzaid/ngx-form-factory/commit/09417278d642cdc5208167351defe55ca42496f7))
- **form-factory:** field was replicated by number of sections ([c53ba4f](https://github.com/ezzabuzaid/ngx-form-factory/commit/c53ba4f4a7c2de2a274fda593a84d2bf3106c049))
- **form-factory:** rename ngx-form-container to ngx-form-factory ([951a05a](https://github.com/ezzabuzaid/ngx-form-factory/commit/951a05ae21ed61d4469f445fa7abfe2d81c983d4))
- **form-factory:** sectioned field is not properly mapped ([6f8e0b4](https://github.com/ezzabuzaid/ngx-form-factory/commit/6f8e0b452bd620fe2e34cad32554068ab57d2508))
- **form-factory:** wrong section variable is used ([0a6ab4b](https://github.com/ezzabuzaid/ngx-form-factory/commit/0a6ab4b8598cbf1ebc981cb91bb69ff40a35b599))
- **FormContainer:** remove box shadow from the box ([395f27e](https://github.com/ezzabuzaid/ngx-form-factory/commit/395f27ef9c2c5bcd322bde78652b0e454ba6b7fc))
- **Form:** get prevent compiling beacuse of wrong type ([2ddc4ff](https://github.com/ezzabuzaid/ngx-form-factory/commit/2ddc4ff71c238d8c853aa2fbcaf9513c63c2b152))
- import material button and icon modules, strech field width to 100% ([d47f3b6](https://github.com/ezzabuzaid/ngx-form-factory/commit/d47f3b6760aab51af3869dc4fcff0dd5a443ffbe))
- include BrowserAnimationsModule only in debug mode ([647041f](https://github.com/ezzabuzaid/ngx-form-factory/commit/647041f410901609f4e1ec1b2b8c785a05db737c))
- **mobile-control:** import mat input module ([7e567c3](https://github.com/ezzabuzaid/ngx-form-factory/commit/7e567c3be09ac87727ba6cd6c8e785c2ebdf0a12))
- **mobile-control:** remove auto detect country ([d53adba](https://github.com/ezzabuzaid/ngx-form-factory/commit/d53adbae244eacef14c7e30648ad9accefc7c52e))
- remove boostrap dependinces from field-factory and form-factory ([45d11a9](https://github.com/ezzabuzaid/ngx-form-factory/commit/45d11a95ded508f848a3bcab2967cf9d6b31b384))
- restructure the modules to make intellisense look at it ([31e6783](https://github.com/ezzabuzaid/ngx-form-factory/commit/31e6783d65b159e7ec1cf238764bcb2b918274d0))
- **select:** mark multiple as optional ([cf62f7b](https://github.com/ezzabuzaid/ngx-form-factory/commit/cf62f7bfe2b3b1c8415258fee3c50983a1620d3b))
- **SelectOption:** make SelectOption.key optional and use the assign it SelectOption.value if not provided ([49f9450](https://github.com/ezzabuzaid/ngx-form-factory/commit/49f945078f5f4eea11d598a8d3920000e492049f))
- **toggle-password:** not exporting it was causing an error ([10f853f](https://github.com/ezzabuzaid/ngx-form-factory/commit/10f853f5a5bfaf52b1e8b2ec61e0dc9650079dfb))
- **toggle-password:** wrong name of selector ([445baa5](https://github.com/ezzabuzaid/ngx-form-factory/commit/445baa533e8bf954adfe2299cef111b7c7cd15f4))
- wrong check fo implicitFields option ([d764859](https://github.com/ezzabuzaid/ngx-form-factory/commit/d76485916ee765c428af7eaf870409700e23291f))
