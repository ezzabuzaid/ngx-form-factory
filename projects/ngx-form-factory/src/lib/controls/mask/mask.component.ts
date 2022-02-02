import { Component, Input } from '@angular/core';
import { MaskField } from '../../fields';
@Component({
    selector: 'ngx-mask',
    templateUrl: './mask.component.html',
})
export class MaskComponent {
    @Input() field: MaskField<any>;
    constructor() { }

}
