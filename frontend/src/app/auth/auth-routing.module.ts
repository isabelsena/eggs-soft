import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Components
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";


const AuthRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
]


@NgModule({
    imports: [
        RouterModule.forChild(AuthRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule {}
