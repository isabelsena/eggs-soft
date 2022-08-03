import { Component, OnInit } from '@angular/core';

// Store
import { Store } from '@ngrx/store';
import { ModuleState } from './store';
import { initgetCurrentUser } from './store/actions';

@Component({
  selector: 'pages-main',
  templateUrl: './pages.component.html',
  styleUrls: []
})
export class PagesComponent implements OnInit {

  constructor(
    private store: Store<ModuleState>
  ) { }

  ngOnInit() {
    const token = JSON.parse(localStorage.getItem('token')|| '');
    this.store.dispatch(initgetCurrentUser({token: token}))
  }

}
