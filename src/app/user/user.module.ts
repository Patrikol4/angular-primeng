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
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing.module';
import { PasswordModule } from 'primeng/password';



@NgModule({
  declarations: [
    UserComponent
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
    UserRoutingModule,
    CommonModule,
    ButtonModule
  ]
})
export class UserModule { }
