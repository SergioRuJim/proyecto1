import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  listarLibros():Observable<any>{
    return this.httpClient.get("http://localhost:3000/libros");
  }


  constructor(private httpClient:HttpClient) { }
}
