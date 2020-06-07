import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FormFactoryManager extends BehaviorSubject<boolean> {
    constructor() {
        super(false);
    }
}
