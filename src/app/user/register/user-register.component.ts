import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-user-register',
    templateUrl: './user-register.component.html',
    styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent implements OnInit {

    form: any = {
        username: null,
        usermail: null,
        userpass: null
    };
    bemSucedido = false;
    seRegistroFalhar = false;
    msgErro = '';

    constructor() { }

    ngOnInit() {

    }

    aoEnviar(): void {
        const {username, usermail, userpass} = this.form;

        
    }

}