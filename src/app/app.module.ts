import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';


import { UserService } from './userService';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProductnewComponent } from './productnew/productnew.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ProductsComponent,
    ProductdetailComponent,
    ProductnewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    TableModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
