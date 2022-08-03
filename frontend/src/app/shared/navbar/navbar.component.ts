import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import { Store } from '@ngrx/store';
//import { LoggedUser } from 'src/app/auth/auth-interfaces';
//import { ModuleState } from 'src/app/auth/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  /*user: LoggedUser = {
    id: 0,
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    is_superuser: false,
    date_joined: ''
  }*/
  
  constructor(
    // private store: Store<ModuleState>
    private router: Router
  ) {   }

  ngOnInit(): void {
    /*this.store.select('authmodule')
      .subscribe(
        ({loggedUser}) => {
          this.user = {...loggedUser}
        }
      )*/
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
