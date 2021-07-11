export class AppConstants {

    public static get baseServer(): string { return "http://localhost:8080/"} 

    public static get baseLogin(): string { return this.baseServer + "psauth/login" }

    public static get baseUrlUser(): string { return this.baseServer + "psauth/user" }

    public static get baseUrlGuest(): string { return this.baseServer + "psauth/guest" }
}