import { Component, OnInit } from '@angular/core';
import { Client } from '../client.module';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.css']
})
export class ClientReadComponent implements OnInit {

  clients: Client[]
  displayedColumns = ['id', 'name', 'phone', 'email', 'action']

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.clientService.read().subscribe(clients=> {
      this.clients = clients
    })  }


    deleteClient(id: number):void {
      this.clientService.delete(id)
        this.clientService.showMessage('Cliente deletado com sucesso!')
        this.router.navigate(['/clients'])
     
  
    }

}
