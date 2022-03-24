import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient:HttpClient) { }

  listarUsuarios():Observable<any>{
    return this.httpClient.get("https://jsonplaceholder.typicode.com/users");
  }

  nuevoUsuario(nuevoUsuario:any){
    let json = JSON.stringify(nuevoUsuario);
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this.httpClient.post("https://jsonplaceholder.typicode.com/users/",json,{headers: header});
  }

  eliminarUsuario(id_usuario:any):Observable<any>{
    return this.httpClient.delete("https://jsonplaceholder.typicode.com/users/" + id_usuario);
  }
}
