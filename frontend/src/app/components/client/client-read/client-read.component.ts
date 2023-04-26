
import { Client } from '../client.module';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { ClientReadDataSource } from './client-read-datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.css']
})
export class ClientReadComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Client>;
  dataSource: ClientReadDataSource;

  clients: Client[]
  displayedColumns = ['id', 'nome', 'telefone', 'email', 'action']


  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.dataSource = new ClientReadDataSource(this.clientService, this.router);    
    }


    deleteProduct(id: number):void {
      this.clientService.delete(id)
        this.clientService.showMessage('Produto deletado com sucesso!')
        this.router.navigate(['/clients'])
     
  
    }

    ngAfterContentInit(){
      this.clientService.read().subscribe(clients=> {
        this.dataSource.data = clients
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
       }) 

      

      

       
    }

    ngAfterViewInit() {
      
     
    }

}
