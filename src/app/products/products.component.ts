import { Component, OnInit } from '@angular/core';
import { Product } from './products';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = []
  

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.findAll();
  }
  
  findAll() {
    this.service.findAll().subscribe(response => {
      console.log(response);
      this.products = response;
    })
  }

}
