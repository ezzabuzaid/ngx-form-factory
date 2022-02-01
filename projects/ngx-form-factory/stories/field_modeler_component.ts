import { Component, Inject, InjectionToken } from "@angular/core";
import { EFieldType } from "ngx-form-factory";

export const ARGS = new InjectionToken('ARGS');

@Component({
    styles: [`pre code {
        background-color: #eee;
        border: 1px solid #999;
        display: block;
        padding: 20px;
}`],
    template: `
        <ngx-field-factory [field]="args.field"></ngx-field-factory>
        <pre>
        <code [innerHTML]="code"></code>
        </pre>
  `
})
export class FieldModelerComponent {
    code: string;
    constructor(@Inject(ARGS) public args: any) {
        console.log(args)
        this.code = `new ${args.field.constructor.name}({`;
        this.addLine('label', this.args.label);
        this.addLine('value', this.args.value);
        this.addLine('type', this.args.type ? `EFieldType.${EFieldType[this.args.type]}` : '', true);
        this.addLine('autocomplete', this.args.autocomplete);
        this.addLine('hideRequiredMarker', this.args.hideRequiredMarker, true);
        this.addLine('floatLabel', this.args.floatLabel);
        this.addLine('appearance', this.args.appearance);
        this.addLine('multiple', this.args.multiple);
        this.addLine('max', this.args.maxTime);
        this.addLine('min', this.args.minTime);
        this.addLine('max', this.args.maxFilter && `new Date(${this.args.maxFilter})`, true);
        this.addLine('min', this.args.minFilter && `new Date(${this.args.minFilter})`, true);
        this.decorateValidators();
        this.decorateErrors(args.errors);
        this.code += '\n});'
    }

    private decorateValidators() {
        const validators = [
            this.args.min && `Validators.min('${this.args.min}'),`,
            this.args.max && `Validators.max('${this.args.max}'),`,
            this.args.maxLength && `Validators.maxLength(${this.args.maxLength}),`,
            this.args.minLength && `Validators.minLength(${this.args.minLength}),`,
            this.args.email && `Validators.email,`,
            this.args.required && `Validators.required,`,
            this.args.pattern && `Validators.pattern(${this.args.pattern}),`,
        ].filter((v) => !!v);
        if (validators.length)
            this.addLine('validatorOrOpts', `[\n\t\t${validators.join('\n\t\t')}\n\t]`, true);
    }

    private decorateErrors(errors: Record<string, any>) {
        const errorMessages = [];
        if (new Object(errors) !== errors)
            return;
        Object.entries(errors).forEach(([key, value]) => {
            if (value) {
                errorMessages.push(`\t\t${key}: '${value}'`);
            }
        });
        this.addLine('errors', `{\n${errorMessages.join(',\n')}\n\t}`, true);
    }

    private addLine(propName: string, propValue: any, withoutQuotations = false) {
        if (propValue) {
            const value = withoutQuotations ? propValue : `'${propValue}'`;
            this.code += `\n\t${propName}: ${value},`;
        }
    }
}

export function convertArgsToProps(props: Record<string, any>): Record<string, any> {
    return Object.entries(props)
        .reduce((acc, [key, value]) => {
            if (key.includes('.')) {
                const [rootKey, ...rest] = key.split('.');
                acc[rootKey] = Object.assign(
                    {},
                    convertArgsToProps({ [rest.join('.')]: value }),
                    acc[rootKey] ?? {}
                );
            } else {
                acc[key] = value;
            }
            return acc;
        }, {});
}
