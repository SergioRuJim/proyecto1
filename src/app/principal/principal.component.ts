import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  titulo: any = "Angular con everFuture"
  personaData: any = {nombre:"María", apellidos:"De la O", edad:27};
  text!: string;

  constructor(private translate: TranslateService) { 
    translate.setDefaultLang('es');
    translate.use('es');
  }
  eventoBotonAngular(){
    console.log("Ejecutamos el evento del botón para " + this.personaData.nombre + " " + this.personaData.apellidos);
  }

  ngOnInit(): void {
  }

  changedLanguage(event:any){
    if(event.target.innerText == "Español")
      this.changeLanguageToEnglish();
    else
      this.changeLanguageToSpanish()
  }

  changeLanguageToSpanish():void{
    this.translate.use('es');
    console.log('Idioma cambiado al español');
  }

  changeLanguageToEnglish():void{
    this.translate.use('en');
    console.log('Idioma cambiado al inglés');
  }

}
