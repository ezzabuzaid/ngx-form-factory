import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FormFactoryManager {
  private state = new BehaviorSubject<boolean>(false);

  showProgressBar() {
    this.state.next(true);
  }

  hideProgressBar() {
    this.state.next(false);
  }

  setState(state: boolean) {
    this.state.next(state);
  }

  watch() {
    return this.state.asObservable().pipe(share());
  }
}
