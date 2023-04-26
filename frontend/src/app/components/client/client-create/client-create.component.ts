import { ClientService } from '../client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client.module';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})


export class ClientCreateComponent implements OnInit {
  
  client: Client = {
    nome: '',
    telefone: '',
    email: '',
    tipo_cadastro: 1
  }

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
  
  }

  createClient(): void {
    this.clientService.create(this.client).subscribe(() => {
      this.clientService.showMessage('Cliente criado com sucesso!')
      this.router.navigate(['/clients'])
    })
    
  }

  cancel(): void {
    this.router.navigate(['/clients'])
  }
  

}
