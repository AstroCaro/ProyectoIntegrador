import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from '../app/@components/index/index.component';
import { HabitacionesComponent } from '../app/@components/habitaciones/habitaciones.component';
import { ServiciosComponent } from '../app/@components/servicios/servicios.component'
import { ContactoComponent } from '../app/@components/contacto/contacto.component';
import { SobrenosotrosComponent } from '../app/@components/sobrenosotros/sobrenosotros.component';
import { FormularioComponent } from '../app/@components/formulario/formulario.component';
import { LoginComponent } from '../app/@components/login/login.component';


const routes: Routes = [
  {path:'servicios', component:IndexComponent},
  {path:'servicios', component:ServiciosComponent},
  {path:'habitaciones', component:HabitacionesComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'contacto', component:SobrenosotrosComponent},
  {path:'contacto', component:FormularioComponent},
  {path:'LoginComponent', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
