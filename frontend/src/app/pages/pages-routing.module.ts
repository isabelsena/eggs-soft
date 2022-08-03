import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Componenents
import { DomicilesComponent } from './components/domiciles/domiciles.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ProductsComponent } from './components/products/products.component';
import { PurshasesComponent } from './components/purshases/purshases.component';


const PagesRoutes: Routes = [
    { path: 'products', component: ProductsComponent},
    { path: 'purshases', component: PurshasesComponent },
    { path: 'domicilies', component: DomicilesComponent},
    { path: 'payments', component: PaymentsComponent},
    { path: 'home', component: HomeComponent},
]


@NgModule({
    imports: [
        RouterModule.forChild(PagesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PagesRoutingModule {}