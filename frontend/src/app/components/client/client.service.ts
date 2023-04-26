import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Client } from './client.module';
import { Observable, EMPTY } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl = 'http://localhost:8080/pessoaController';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg,'',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(client: Client): Observable<Client>{
    const url = `${this.baseUrl}/salvarPessoa`;
    return this.http.post<Client>(url,client).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )}

  read(): Observable<Client[]> {
    const url = `${this.baseUrl}/listarPessoas`;
    return this.http.get<Client[]>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(id: number): Observable<Client> {
    const url = `${this.baseUrl}/listarPessoa/${id}`;
    return this.http.get<Client>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  update(client: Client): Observable<Client> {
    const url = `${this.baseUrl}/atualizarPessoa`;
    return this.http.put<Client>(url,client).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<Client> {
    const url = `${this.baseUrl}/deletarPessoa/${id}`;
    return this.http.delete<Client>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e:any): Observable<any>{
      this.showMessage("Ocorreu um erro!", true)
      return EMPTY;
    }
}
