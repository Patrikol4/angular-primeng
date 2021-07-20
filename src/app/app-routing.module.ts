import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductscreateComponent } from './products/products-create/products-create.component';
import { UserRegisterComponent } from './user/register/user-register.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { UsersCreateComponent } from './users/users-create/users-create.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'user/new',
    component: UsersCreateComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'register',
    component:UserRegisterComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products/new',
    component: ProductscreateComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
