import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductnewComponent } from './productnew/productnew.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'usuario',
    component: UserComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products/id',
    component: ProductdetailComponent
  },
  {
    path: 'products/newproduct',
    component: ProductnewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
