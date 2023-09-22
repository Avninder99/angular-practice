import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EntriesSelector } from '../store/list.selector';
import { entryCompleteToggle } from '../store/list.action';

@Component({
  selector: 'app-list-holder',
  templateUrl: './list-holder.component.html',
  styleUrls: ['./list-holder.component.css']
})
export class ListHolderComponent {
  Entries$: Observable<{ desc: string, completed: boolean}[]>;

  constructor(private store: Store<{ Entries: { desc: string, completed: boolean }[] }>) { 
    this.Entries$ = this.store.select(EntriesSelector);
  }

  toggleComplete = (index: number) => {
    console.log(index);
    this.store.dispatch(entryCompleteToggle({ index }));
  }
}
