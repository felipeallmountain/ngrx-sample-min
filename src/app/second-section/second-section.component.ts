import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from './../store/reducers';
import { AddNameAction, ClearNamesAction } from './../store/actions';

@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.css']
})
export class SecondSectionComponent implements OnInit {

  private typedName: string;

  constructor(private store: Store<IAppStore>) {}

  ngOnInit() {
  }

  submit() {
    if (!this.typedName) {
      return;
    }

    this.store.dispatch(new AddNameAction(this.typedName));

    this.typedName = '';
  }

  clear() {
    this.store.dispatch(new ClearNamesAction());
  }

}
