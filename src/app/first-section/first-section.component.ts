import { namesSelector } from './../store/selectors';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStore } from './../store/reducers';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.css']
})
export class FirstSectionComponent implements OnInit {

  private names$: Observable<string>;

  constructor(private store: Store<IAppStore>) {
    this.names$ = this.store.select(namesSelector)
      .map(d => d.sort().join(' / '));
  }

  ngOnInit() {
  }
}
