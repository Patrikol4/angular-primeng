import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {
    
    userNames: string[] = [
        "Reginaldo",
        "aguinaldo",
        "Norbaldo",
        "Usinaldo",
        "Etvaldo",
        "Robervaldo"
    ];

    constructor(private http: HttpClient) { }

    getUserSmall() {
        return this.http.get<any>('assets/users-small.json')
            .toPromise()
            .then(res => <User[]>res.data)
            .then(data => { return data; });
    }

    getUsers() {
        return this.http.get<any>('')
            .toPromise()
            .then(res => <User[]>res.data)
            .then(data => { return data; });
    }

    gerarUser(): User {
        const user: User = {
            id: this.gerarId(),
            nome: this.gerarNome(),
            senha: this.gerarSenha()
        };

        return user;

    }

    gerarId() {
        let text = "";
        let possible = "0123456789";

        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random())
                * possible.length)
        }

        return text;

    }

    gerarNome() {

        return this.userNames[Math.floor(Math.random() *
            Math.floor(30))];
    }

    gerarSenha() {
        let textpass = "";
        let hashpossible = 
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++) {
            textpass += hashpossible.charAt(Math.floor(Math.random() * hashpossible.length));
        }

        return textpass;
    }
}