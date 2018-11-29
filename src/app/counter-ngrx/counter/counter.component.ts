import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as counterApp from '../store/counter.action';
import { AppState } from '../store/counter.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {

  counter: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter = store.select('counter');
  }

  increment() {
    this.store.dispatch(new counterApp.IncrementAction());
  }

  decrement() {
    this.store.dispatch(new counterApp.DecrementAction());
  }

  reset() {
    this.store.dispatch(new counterApp.ResetAction());
  }

  ngOnInit() {
  }

}
