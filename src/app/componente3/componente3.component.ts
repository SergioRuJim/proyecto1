import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {

  @Input("curso2Componente1") datosCurso2: any;
  @Input("contadorComponente1") contador: any;

  constructor() { }

  ngOnInit(): void {
  }

}
