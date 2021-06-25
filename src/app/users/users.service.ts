import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from '../user';

@Injectable({
    providedIn: 'root'
})

export class UsersService {

    baseUrl: String = environment.baseUrl;

    constructor(private http: HttpClient) { }

    findAll():Observable<User[]>{
        const url = `${this.baseUrl}/usuarios`;
        return this.http.get<User[]>(url);
    }
}