import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productscreate',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductscreateComponent implements OnInit {

  product: Product = {
    nome: '',
    descricao: '',
    preco: ''
  }
  

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
  }

  create():void {
    this.service.create(this.product).subscribe((resposta) => {
      console.log(resposta);
    })
  }

}
