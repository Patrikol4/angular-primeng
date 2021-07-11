import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from './app-constants';
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  saveUser(user): Observable<any> {
    return this.http.post<any>(AppConstants.baseUrlUser + "admin", user )
  }

  isAuthenticated(user) {

  }
}
