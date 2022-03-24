import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from '../servicio/productos.service';
import { Product } from '../models/product.models';

@Component({
  selector: 'app-c-seccion3',
  templateUrl: './c-seccion3.component.html',
  styleUrls: ['./c-seccion3.component.css']
})
export class CSeccion3Component implements OnInit {

  tecnologias = [{"id":'Angular', 'nombre':'Angular'}]
  tags = [{"id":'1.2', 'nombre':'1.2'}]
  estados = [{"id":'Avanzado', 'nombre':'Avanzado'}]
  formBusquedaCursos:FormGroup = new FormGroup({
    nombreCurso: new FormControl(''),
    tecnologia: new FormControl(''),
    tag: new FormControl(''),
    estado: new FormControl('')
  })

  ciudad!: String;
  poblacion!: String;

  productos!: Product[];

  formComentarios: FormGroup = new FormGroup({
    usuario: new FormControl('', Validators.required),
    comentarios : new FormControl('', [Validators.required,Validators.minLength(10)]),
    email : new FormControl('', [Validators.required, Validators.pattern("[^@]*@[^@]*"),this.emailDomainValidator])
  })

  formAltaCurso: FormGroup = new FormGroup({
    nombreCurso: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  // Para facilitar el acceso desde HTML:
  get f(){
    return this.formAltaCurso.controls;
  }

  emailDomainValidator(control:FormControl) {
    let email = control.value;
    if(email && email.indexOf("@") != -1){
      let [_, domain] = email.split("@");
      if(domain !== "codecraft.tv"){
        return {
          emailDomain: domain
        }
      }
    }
    return null;
  }

  realizarBusquedaCursos(){
    console.log(  "Buscar por TAG: " + this.formBusquedaCursos.value.tag +
                  " - NOMBRECURSO: " + this.formBusquedaCursos.value.nombreCurso + 
                  " - ESTADO: " + this.formBusquedaCursos.value.estado + 
                " - TECNOLOGIA: " + this.formBusquedaCursos.value.tecnologia)
}

limpiarCampos(){
  this.formBusquedaCursos = new FormGroup({
    nombreCurso: new FormControl(''),
    tecnologia: new FormControl(''),
    estado: new FormControl(''),
    tag: new FormControl('')
  })
}

  constructor(private route: ActivatedRoute, private router: Router, private productosService: ProductosService) { 
    this.productos = productosService.productos;
  }

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
