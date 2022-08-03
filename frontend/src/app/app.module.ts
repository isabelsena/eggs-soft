import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Router
import { AppRoutingModule } from './app.routing.module';

// JWT
import { JwtModule } from '@auth0/angular-jwt';
import { JWTConfig } from './services/auth';

// Components
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';

// Modules
import { SharedModule } from './shared';
import { ServiceModule } from './services';

// Store and dev tools
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Envs
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent
  ],
  imports: [
    // Angular Modules
    BrowserModule,

    // Store Modules
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),

    // Custom Modules
    AppRoutingModule,
    SharedModule,
    ServiceModule,
    JwtModule.forRoot(JWTConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
