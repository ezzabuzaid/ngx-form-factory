import { Component, Input, OnInit } from '@angular/core';
import { TextareaField } from '../../fields';

@Component({
    selector: 'ngx-textarea',
    templateUrl: './textarea.component.html',
})
export class TextareaComponent implements OnInit {
    @Input() field: TextareaField;
    constructor() { }

    ngOnInit(): void {
    }

}
