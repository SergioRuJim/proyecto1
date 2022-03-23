import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c-seccion3',
  templateUrl: './c-seccion3.component.html',
  styleUrls: ['./c-seccion3.component.css']
})
export class CSeccion3Component implements OnInit {

  ciudad!: String;
  poblacion!: String;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params["ciudad"] !=null){
        this.ciudad = params["ciudad"];
      }
      if(params["poblacion"] !=null){
        this.poblacion = params["poblacion"];
      }
    });
  }

}
