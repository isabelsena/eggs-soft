import { NgModule } from "@angular/core";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";

// Guards
import { AuthGuardService } from './services/auth';

// Components
import { PagesComponent } from './pages/pages.component';

// Module 
import { AuthModule } from './auth/auth.module';

const RootRoutes: Routes = [
    {
        path: 'pages',
        component: PagesComponent,
        canActivate: [AuthGuardService],
        canLoad: [AuthGuardService],
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    },
    {
        path: '',
        loadChildren: () => AuthModule
    },
]

const RouterConfig: ExtraOptions = {
    useHash: true
}


@NgModule({
    imports: [
        RouterModule.forRoot(RootRoutes, RouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
