import { Component, OnInit } from '@angular/core';

// Forms
import { FormControl, FormGroup, Validators} from '@angular/forms';

// Store
import { Store } from '@ngrx/store';
import { ModuleState } from '../../store';
import { loginUser, CleanErrorMessages } from '../../store/actions'

// Interfaces
import { AuthUser, Errors } from '../../auth-interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  isLogin: boolean;
  error!: Errors;

  constructor(
    // private router: Router,
    private store: Store<ModuleState>
  ) 
  {
    this.form = new FormGroup({
      username: new FormControl('', [
          Validators.required
      ]),
      password: new FormControl('', [
          Validators.required
      ]),
    });
    this.isLogin = false;
  }

  ngOnInit(): void {
    this.subscribeStore();
  }

  subscribeStore() {
    this.store.select('auth')
        .subscribe(({errors}) => {
          this.error = errors
        });
  }

  submit(): void {
    const user: AuthUser = this.form.value;
    this.store.dispatch(loginUser({user}));
    setTimeout(() => {
      this.store.dispatch(CleanErrorMessages())
    }, 5000)
  }

}
