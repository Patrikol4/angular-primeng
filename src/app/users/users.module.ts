import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { PasswordModule } from 'primeng/password';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users.routing.module';



@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    UsersRoutingModule,
    CommonModule,
    ButtonModule
  ]
})
export class UserModule { }
