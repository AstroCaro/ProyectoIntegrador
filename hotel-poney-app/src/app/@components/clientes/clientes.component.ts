import { Component } from '@angular/core';
import { ClientesService } from 'app/services/clientes.service';


@Component({
    selector: 'app-clientes',
    templateUrl: './clientes.component.html',
    styleUrls: ['./clientes.component.css'],
    providers: [ClientesService]
  })
    export class ClientesComponent {
        hoy = new Date();
        mostrarClientes: boolean = true ;
        clientes: any;
        constructor(private usuarios: ClientesService) {
            this.usuarios.getClientes().subscribe({
                next: (data: any) => {
                    this.clientes = data;
                },
                error: (error) => {
                    console.log(error);
                }

            })

        }
}
