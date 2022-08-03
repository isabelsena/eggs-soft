import { NgModule } from "@angular/core";
import { SharedModule } from "../shared";

// Routing
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PurshasesComponent } from './components/purshases/purshases.component';
import { DomicilesComponent } from './components/domiciles/domiciles.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ProductsComponent } from './components/products/products.component';

// Store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as reducers from './store/reducers';

// Effects
import { EffectsArray } from './store/effects'
import { PagesService } from "./services";

@NgModule({
    declarations: [
    HomeComponent,
    PurshasesComponent,
    DomicilesComponent,
    PaymentsComponent,
    ProductsComponent
  ],
    imports: [
        PagesRoutingModule,
        SharedModule,
        StoreModule.forFeature('user', reducers.UserReducer),
        StoreModule.forFeature('product', reducers.ProductReducer),
        EffectsModule.forFeature(EffectsArray)
    ],
    providers: [
      PagesService
    ],
    exports: []
})
export class PagesModule {}
