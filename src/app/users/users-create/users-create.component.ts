import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-userscreate',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {

  user: User = {
    login: '',
    nome: '',
    senha: ''
  }
  

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  create():void {
    this.service.create(this.user).subscribe((resposta) => {
      console.log(resposta);
    })
  }

}
