import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ProductosService } from './servicio/productos.service';
import { UsuariosService } from './servicio/usuarios.service';
import { LibrosService } from './servicio/libros.service';
import { HttpClientModule } from'@angular/common/http';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HijoPrComponent } from './hijo-pr/hijo-pr.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';
import { Componente4Component } from './componente4/componente4.component';
import { CSeccion2Component } from './c-seccion2/c-seccion2.component';
import { CSeccion3Component } from './c-seccion3/c-seccion3.component';
import { ErrorComponent } from './error/error.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LibroComponent } from './libro/libro.component';

const routes: Routes = [
  {path:'', component: CSeccion2Component},
  {path:'seccion2', component: CSeccion2Component},
  {path:'seccion3', component: CSeccion3Component},
  {path:'seccion2/:nombre', component: CSeccion2Component},
  {path:'seccion3/:ciudad/:poblacion', component: CSeccion3Component},
  {path:'usuario', component: UsuarioComponent},
  {path:'libro', component: LibroComponent},
  {path:'**', component: ErrorComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    FooterComponent,
    HijoPrComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component,
    Componente4Component,
    CSeccion2Component,
    CSeccion3Component,
    UsuarioComponent,
    LibroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductosService, UsuariosService, LibrosService],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }
