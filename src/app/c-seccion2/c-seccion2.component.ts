import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-c-seccion2',
  templateUrl: './c-seccion2.component.html',
  styleUrls: ['./c-seccion2.component.css']
})
export class CSeccion2Component implements OnInit {


    nombrePersona!: string;

    formComentarios: FormGroup = new FormGroup({
      usuario : new FormControl('', Validators.required),
      comentario : new FormControl('', [Validators.required, Validators.minLength(10)])
    })

    // Para facilitar el acceso desde HTML:
  get f(){
    return this.formComentarios.controls;
  }

  enviarComentarios(){
    console.log("El usuario '" + this.formComentarios.value.usuario + "' ha escrito el comentario: '" +
                this.formComentarios.value.comentario + "'");
    this.limpiarCampos();
  }

  limpiarCampos(){
    this.formComentarios = new FormGroup({
      usuario : new FormControl('', Validators.required),
      comentario : new FormControl('', [Validators.required, Validators.minLength(10)])
    })
  }
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params["nombre"] !=null){
        this.nombrePersona = params["nombre"];
      }
    });
    console.log("Nombre anterior: " + localStorage.getItem("NOMBRE_ANTERIOR"));
  }

  ngOnDestroy():void{
    if(this.nombrePersona != null)
      localStorage.setItem("NOMBRE_ANTERIOR", this.nombrePersona);
    else
      localStorage.setItem("NOMBRE_ANTERIOR", "(ningúb nombre recibido por parámetro)");
  }

}
