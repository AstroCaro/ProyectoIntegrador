import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  muestraMensaje(mensaje:string){
    alert(mensaje)
  }
}
