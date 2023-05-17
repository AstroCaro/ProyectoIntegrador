import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../app/pages/home/home.component';
import { HabitacionesComponent } from '../app/pages/habitaciones/habitaciones.component';
import { ServiciosComponent } from '../app/pages/servicios/servicios.component'
import { ContactoComponent } from '../app/pages/contacto/contacto.component';
import { SobrenosotrosComponent } from '../app/pages/sobrenosotros/sobrenosotros.component';
import { FormularioComponent } from '../app/pages/formulario/formulario.component';
import { LoginComponent } from '../app/pages/login/login.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'servicios', component:ServiciosComponent},
  {path:'habitaciones', component:HabitacionesComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'sobrenosotros', component:SobrenosotrosComponent},
  {path:'formulario', component:FormularioComponent},
  {path:'login', component:LoginComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}, //redireccionamiento por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
