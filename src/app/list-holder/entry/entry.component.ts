import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { entryAdder } from 'src/app/store/list.action';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent {
  desc: string = "";
  constructor(private store: Store) { }


  addEntry = () => {
    this.store.dispatch(entryAdder({ desc: this.desc }));
    this.desc = "";
  }
}
