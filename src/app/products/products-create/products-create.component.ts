import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productscreate',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductscreateComponent implements OnInit {

  products: Product[] = []
  

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    
  }

}
