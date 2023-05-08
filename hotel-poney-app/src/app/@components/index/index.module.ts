import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';



@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [IndexComponent]
})
export class IndexModule { }
