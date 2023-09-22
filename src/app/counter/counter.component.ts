import { Component } from '@angular/core';
import { counterSelector } from '../store/counter.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../store/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count$: Observable<number>;
  changeBy: number = 1;

  constructor(private store: Store<{ counter: number }>) { 
    this.count$ = this.store.select(counterSelector);
  }

  resetCounter = () => {
    this.store.dispatch(reset());
  }

  increment = () => {
    this.store.dispatch(increment({ value: this.changeBy }));
  }
  
  decrement = () => {
    this.store.dispatch(decrement({ value: this.changeBy }));
  }
}
