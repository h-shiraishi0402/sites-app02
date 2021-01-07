
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';


const routes: Routes = [
  {
    path: 'products', component: ProductComponent,
    children: [
      { path: '', component: ProductsListComponent },
      { path: 'detail', component: ProductsDetailComponent },
    ]
  },
];

@NgModule({
  declarations: [
    ProductComponent,
    ProductsDetailComponent,
    ProductsListComponent,

  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule

  ],
  providers: [],
  bootstrap: []
})
export class ProductModule { }
