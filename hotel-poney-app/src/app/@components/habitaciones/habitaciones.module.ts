import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitacionesComponent } from './habitaciones.component';



@NgModule({
  declarations: [
    HabitacionesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HabitacionesComponent]
})
export class HabitacionesModule { }
