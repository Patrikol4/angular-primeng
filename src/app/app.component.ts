import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-primeng';

  selectedState: any = null;

  states: any[] = [
    {name: 'Sao Paulo', code:'SP'},
    {name: 'Rio de Janeiro', code:'Rio'},
    {name: 'Minas Gerais', code: 'MG'},
    {name: 'Rio Grande do Sul', code: 'RS'}
  ];

  cities1: any[] = [];
  cities2: any[] = [];

  city1:any = null;
  city2:any = null;
}
