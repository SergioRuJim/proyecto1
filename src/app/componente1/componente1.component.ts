import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  curso1 = {'nombre':'Beca Angular', 'total_dias':9, 'descripcion':'Curso sobre Angular y Typescript'};
  curso2 = {'nombre':'Beca Java', 'total_dias':10, 'descripcion':'Formación sobre Java'};
  contador:number = 0;

  constructor() { }

  eventoIntercambiar(){
    let auxNombre = this.curso1.nombre;
    let auxDescripcion = this.curso1.descripcion;
    this.curso1.nombre = this.curso2.nombre;
    this.curso1.descripcion = this.curso2.descripcion;
    this.curso2.nombre = auxNombre;
    this.curso2.descripcion = auxDescripcion;
    this.contador ++;
  }

  ngOnInit(): void {
  }

}
