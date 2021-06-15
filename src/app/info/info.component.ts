import { Component, OnInit } from '@angular/core';
import { UserService } from '../userService';
import { User } from '../user';
import { HttpClient, HttpParams } from "@angular/common/http";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  
  users: User[];
  mostrarUserCriadoRecente: any;
 
  
  dadosUser = {
    id: Math.random().toString(36).substr(2, 9),
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
