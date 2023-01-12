import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

import { assertNotNullOrUndefined } from './utils';

@Directive({
  selector: '[ngxProxy]',
  standalone: true,
})
export class ProxyDirective implements AfterViewInit {
  @Input() public propertyName!: string;
  @Input() public propertyDescriptor!: PropertyDescriptor;

  constructor(private _elementRef: ElementRef<HTMLElement>) {}

  public ngAfterViewInit(): void {
    assertNotNullOrUndefined(this.propertyName);
    assertNotNullOrUndefined(this.propertyDescriptor);
    Object.defineProperty(
      this._elementRef.nativeElement,
      this.propertyName,
      this.propertyDescriptor
    );
  }
}
