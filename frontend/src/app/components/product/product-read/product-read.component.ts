import { Component, OnInit } from '@angular/core';
import { Product } from '../product.module';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id', 'nome', 'preco', 'estoque', 'acoes']

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products=> {
      this.products = products
      console.log(products)
    })  }


    deleteProduct(id: number):void {
      this.productService.delete(id)
        this.productService.showMessage('Produto deletado com sucesso!')
        this.router.navigate(['/products'])
     
  
    }

}
