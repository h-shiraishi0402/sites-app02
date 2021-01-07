import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './product/products-list/products-list.component';
import { ProductsDetailComponent } from './product/products-detail/products-detail.component';
import { ProductModule } from './product/product.module';

const routes: Routes = [
  { path: '', redirectTo:'products', pathMatch: 'full' },
  // { path: 'detail', component: ProductsDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
