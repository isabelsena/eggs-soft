import { Component, OnInit } from '@angular/core';

// Forms
import { FormControl, FormGroup, Validators} from '@angular/forms';

// Store
import { Store } from '@ngrx/store';
import { ModuleState } from '../../store';
import { registerUser, CleanErrorMessages } from '../../store/actions'

// Interfaces
import { RegUser, Errors } from '../../auth-interfaces';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{

  form: FormGroup;
  error: Errors = {
    status: 0,
    statusText: '',
    url: '',
    ok: false,
    name: '',
    message: '',
    error: {
      username: [],
      detail: ''
    }
  }

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
      email: new FormControl('', [
        Validators.required
    ]),
    });
  }

  ngOnInit(): void {
      this.subscribeStore();
  }

  subscribeStore() {
    this.store.select('auth')
      .subscribe(({errors}) => {
        this.error = errors;
      });
  }

  submit(): void {
    const user: RegUser = this.form.value;
    this.store.dispatch(registerUser({user}));
    setTimeout(() => {
      this.store.dispatch(CleanErrorMessages())
    }, 5000);
  }
}
