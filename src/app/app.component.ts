import { Component } from '@angular/core';
import { UserService } from './userService';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-primeng';

  users: User[];
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserSmall().then(data => this.users = data);
  }
}
