import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario.component';



@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FormularioComponent]
})
export class FormularioModule { }
