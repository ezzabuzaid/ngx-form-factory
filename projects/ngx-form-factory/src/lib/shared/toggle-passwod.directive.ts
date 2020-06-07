import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngxTogglePasswod]'
})
export class TogglePasswodDirective {
  @Input() togglePasswod: HTMLInputElement;

  constructor(
    private readonly elRef: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
  ) { }

  @HostListener('click') toggleType() {
    const iconElement = this.elRef.nativeElement;
    const type = this.togglePasswod.type || this.togglePasswod.getAttribute('type');
    if (type !== 'text') {
      this.renderer.setAttribute(this.togglePasswod, 'type', 'text');
      iconElement.textContent = 'lock_open';
    } else {
      this.renderer.setAttribute(this.togglePasswod, 'type', 'password');
      iconElement.textContent = 'lock';
    }
  }

}
