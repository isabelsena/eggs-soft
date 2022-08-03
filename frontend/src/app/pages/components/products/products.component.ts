import { Component, OnInit } from '@angular/core';

// Interfaces
import { Product } from '../../pages-interfaces';

// Store
import { Store } from '@ngrx/store';
import { ModuleState } from '../../store';
import { getAllProduct, initgetallProduct } from '../../store/actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products!: Product[]

  constructor(
    private store: Store<ModuleState>
  ) { }

  ngOnInit(): void {
    this.subscribeStore();
    this.getAllProducts();
  }

  subscribeStore() {
    this.store.select('product')
      .subscribe( ({products}) => {
        this.products = products
      });
  }

  getAllProducts() {
    const token = JSON.parse(localStorage.getItem('token')|| '');
    this.store.dispatch(initgetallProduct({token}))
  }

}
