import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Product } from './products';

@Injectable({
    providedIn: 'root'
})

export class ProductsService {

    baseUrl: String = environment.baseUrl;

    constructor(private http: HttpClient) { }

    findAll():Observable<Product[]>{
        const url = `${this.baseUrl}/produtos`;
        return this.http.get<Product[]>(url);
    }

    create(product: Product): Observable<Product>{
        const url = `${this.baseUrl}/produtos/create`
        return this.http.post<Product>(url, product);
    }
}