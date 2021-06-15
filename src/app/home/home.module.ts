import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        CardModule
    ],
    declarations: [HomeComponent],
    bootstrap: [HomeComponent]
})
export class HomeModule { }