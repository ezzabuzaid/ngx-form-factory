import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  NgModule,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[ngxTogglePasswod]',
})
export class TogglePasswodDirective {
  @Input() ngxTogglePasswod!: HTMLInputElement;

  constructor(
    private readonly elRef: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2
  ) {}

  @HostListener('click') toggleType() {
    const iconElement = this.elRef.nativeElement;
    const type =
      this.ngxTogglePasswod.type || this.ngxTogglePasswod.getAttribute('type');
    if (type !== 'text') {
      this.renderer.setAttribute(this.ngxTogglePasswod, 'type', 'text');
      iconElement.textContent = 'lock_open';
    } else {
      this.renderer.setAttribute(this.ngxTogglePasswod, 'type', 'password');
      iconElement.textContent = 'lock';
    }
  }
}

@NgModule({
  declarations: [TogglePasswodDirective],
  exports: [TogglePasswodDirective],
})
export class TogglePasswodDirectiveModule {}
