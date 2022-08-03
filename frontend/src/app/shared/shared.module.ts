import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

// Store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ModuleReducers } from '../auth/store';
import { EffectsArray } from '../auth/store/effects'

// SVC
import { AuthService } from '../auth/services'

// Components
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
    ],
    exports: [
        CommonModule,
        NavbarComponent
    ],
    providers: [AuthService]
})
export class SharedModule {}
