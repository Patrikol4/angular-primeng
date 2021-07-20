import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from './user';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    baseUrl: String = environment.baseUrl;

    constructor(private http: HttpClient) { }

    create(user: User):Observable<User>{
        const url = `${this.baseUrl}/usuarios/create`;
        return this.http.post<User>(url, user);
    }
}