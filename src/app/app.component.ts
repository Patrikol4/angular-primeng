import { Component } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-primeng';
  items: MenuItem[];

  constructor() { }

 

  ngOnInit() {

    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        routerLink: '/home'
      },
      {
        label: 'Produtos',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: '/products'
      },
      {
        label: 'Usuários',
        icon: 'pi pi-fw pi-users',
        routerLink: '/users'
      },
      {
        label: 'Meus Dados',
        icon: 'pi pi-fw pi-user',
        routerLink: '/user'
      }
    ]
  }
}
