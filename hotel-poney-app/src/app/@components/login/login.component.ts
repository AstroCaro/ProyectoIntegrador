import { Component } from '@angular/core';
import { ClientesService } from 'app/services/clientes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private miServicio:ClientesService){}

}
