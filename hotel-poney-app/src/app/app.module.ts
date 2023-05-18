import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexModule } from './@components/index/index.module';
import { ContactoModule } from './@components/contacto/contacto.module';
import { FormularioModule } from './@components/formulario/formulario.module';
import { HabitacionesModule } from './@components/habitaciones/habitaciones.module';
import { LoginModule } from './@components/login/login.module';
import { ServiciosModule } from './@components/servicios/servicios.module';
import { SobrenosotrosModule } from './@components/sobrenosotros/sobrenosotros.module';
import { ClientesService } from './services/clientes.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    ContactoModule,
    FormularioModule,
    HabitacionesModule,
    LoginModule,
    ServiciosModule,
    SobrenosotrosModule
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
