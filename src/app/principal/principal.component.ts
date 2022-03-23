import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  titulo: any = "Angular con everFuture"
  personaData: any = {nombre:"María", apellidos:"De la O", edad:27};

  constructor() { }
  eventoBotonAngular(){
    console.log("Ejecutamos el evento del botón para " + this.personaData.nombre + " " + this.personaData.apellidos);
  }

  ngOnInit(): void {
  }

}
