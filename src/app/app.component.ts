import { Component } from '@angular/core';
import { UserService } from './userService';
import { User } from './user';
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-primeng';

  users: User[];
  mostrarUserCriadoRecente: any;
  dadosUser = {
    id: Math.random().toString(36).substr(2,9),
    nome: "",
    senha: ""
  }
  
  constructor(private userService: UserService, private http: HttpClient) { }

  criarUser() {
    this.mostrarUserCriadoRecente = this.http.post("assets/users-new.json", this.dadosUser)
      .subscribe((value: any) => {
        this.mostrarUserCriadoRecente = value;
      })
  }

  ngOnInit() {
    this.userService.getUserSmall().then(data => this.users = data);
  }
}
