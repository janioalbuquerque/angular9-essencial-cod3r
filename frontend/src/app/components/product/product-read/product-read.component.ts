import { Product } from './../product.module';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductReadDataSource } from './product-read-datasource';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Product>;
  dataSource: ProductReadDataSource;

  products: Product[]
  displayedColumns = ['id', 'nome', 'preco', 'estoque', 'acoes']

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.dataSource = new ProductReadDataSource(this.productService, this.router);    
     
    }


    deleteProduct(id: number):void {
      this.productService.delete(id)
        this.productService.showMessage('Produto deletado com sucesso!')
        this.router.navigate(['/products'])
     
  
    }

    ngAfterContentInit(){
      this.productService.read().subscribe(products=> {
        this.dataSource.data = products
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
       }) 

      

      

       
    }

    ngAfterViewInit() {
      
     
    }

}
