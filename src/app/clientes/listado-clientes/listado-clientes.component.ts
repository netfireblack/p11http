import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  clientes: any;

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes() {
    this.clientesService.getClientes()
                        .subscribe((res: any) => {
                          this.clientes = res;
                        }, (err: any) => {
                          console.log(err);
                        })
  }

  eliminarCliente(cif) {
    this.clientesService.deleteClientes(cif)
                        .subscribe((res: any) => {
                          this.cargarClientes();
                        }, (err: any) => {
                          console.log(err);
                        })
  }

}
