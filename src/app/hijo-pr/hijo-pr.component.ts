import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijo-pr',
  templateUrl: './hijo-pr.component.html',
  styleUrls: ['./hijo-pr.component.css']
})
export class HijoPrComponent implements OnInit {

  // Me defino un decorador
  @Input("propiedadHijo") datosPasadoAlHijo: any;

  constructor() { }

  ngOnInit(): void {
  }

}
