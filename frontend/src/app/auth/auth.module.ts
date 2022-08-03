import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from "../shared";

// Store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Store
// import { ModuleReducers } from "./store";

// Effects
import { EffectsArray } from './store/effects'

// Routing
import { AuthRoutingModule } from './auth-routing.module';

// Components
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

// Services
import { AuthService } from './services';

// HttpModule
import { HttpClientModule } from '@angular/common/http';

import * as reducers from './store/reducers';

@NgModule({
    declarations: [
      SignupComponent,
      LoginComponent
    ],
    imports: [
        AuthRoutingModule,
        SharedModule,
        HttpClientModule,
        ReactiveFormsModule,
        StoreModule.forFeature('auth', reducers.AuthReducer),
        EffectsModule.forFeature(EffectsArray)
    ],
    providers: [AuthService],
    exports: []
})
export class AuthModule {}
