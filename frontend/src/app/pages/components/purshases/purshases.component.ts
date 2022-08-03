import { Component, OnInit } from '@angular/core';

// Store
import { Store } from '@ngrx/store';
import { LoggedUser } from '../../pages-interfaces';
import { ModuleState } from '../../store';

@Component({
  selector: 'app-purshases',
  templateUrl: './purshases.component.html',
  styleUrls: ['./purshases.component.scss']
})
export class PurshasesComponent implements OnInit {

  loggedUser: LoggedUser = {
    id: 0,
    username:  '',
    first_name: '',
    last_name: '',
    email: '',
    is_superuser:  false,
    date_joined:  '',  
  }

  constructor(
    private store: Store<ModuleState>
  ) { }

  ngOnInit(): void {
    this.subscribeStore()
  }

  subscribeStore() {
    this.store.select('user')
      .subscribe(({logginUser}) => {
        this.loggedUser = logginUser;
      })
  }

}
