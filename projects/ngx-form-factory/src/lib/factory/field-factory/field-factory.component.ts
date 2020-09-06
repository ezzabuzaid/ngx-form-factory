import {
  ApplicationRef, Component, ComponentFactoryResolver,
  ElementRef, EmbeddedViewRef, Injector, Input, OnInit, Type, EventEmitter
} from '@angular/core';
import { Field, IRawFieldComponent, RawField, SelectField } from '../../fields';
import { EFieldType } from '../../fields/base';
import { DateField } from '../../fields/date';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'ngx-field-factory',
  templateUrl: './field-factory.component.html',
  styleUrls: ['./field-factory.component.scss']
})
export class FieldFactoryComponent implements OnInit {
  @Input() field: Field<any> | RawField<any> | DateField | SelectField<any>;
  types = EFieldType;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private applicationRef: ApplicationRef,
    private elementRef: ElementRef<HTMLElement>
  ) { }

  ngOnInit() {
    const rawField = this.rawField();
    if (rawField) {
      const component = this.createComponent(rawField.component);
      Object.keys(rawField.inputs ?? {}).forEach(input => {
        component[input] = rawField.inputs[input];
      });
      Object.keys(rawField.outputs ?? {}).forEach(output => {
        (component[output] as EventEmitter<any>).subscribe(rawField.outputs[output]);
      });
    }
  }

  private createComponent(component: Type<IRawFieldComponent<any>>) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = factory.create(this.injector);
    componentRef.instance.formControl = this.rawField();
    this.applicationRef.attachView(componentRef.hostView);
    const element = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    this.elementRef.nativeElement.appendChild(element);
    return componentRef.instance;
  }


  normalField() {
    return this.field instanceof Field ? this.field : null;
  }

  rawField() {
    return this.field instanceof RawField ? this.field : null;
  }

  selectField() {
    return this.field instanceof SelectField ? this.field : null;
  }

  dateField() {
    return this.field instanceof DateField ? this.field : null;
  }


}
