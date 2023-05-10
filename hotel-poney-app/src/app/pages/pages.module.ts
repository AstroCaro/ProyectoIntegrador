import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SobrenosotrosComponent } from './sobrenosotros/sobrenosotros.component';

import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    ContactoComponent,
    FormularioComponent,
    HabitacionesComponent,
    ServiciosComponent,
    SobrenosotrosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

    LayoutModule
  ],

  exports:[
    HomeComponent,
    LoginComponent,
    SobrenosotrosComponent,
    FormularioComponent,
    HabitacionesComponent,
    ContactoComponent,
    ServiciosComponent,
  ]
})
export class PagesModule { }
