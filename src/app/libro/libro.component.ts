import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../servicio/libros.service'; 

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  libros:any;

  constructor(private librosService:LibrosService) { 
    this.listarLibros();
  }

  ngOnInit(): void {
  }

  listarLibros(){
    this.librosService.listarLibros().subscribe({
      next: (r) => this.libros = r,
      error: (e) => console.log(JSON.stringify(e))
    });
  }

}
