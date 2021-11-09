import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  form: FormGroup;

  constructor(private clientesService: ClientesService,
              private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      cif: new FormControl('', [Validators.required, Validators.minLength(9)]),
      direccion: new FormControl(''),
      localidad: new FormControl('')
    })
  }

  enviarCliente(): void {
    this.clientesService.postClientes(this.form.value)
                        .subscribe((res: any) => {
                          this.router.navigate(['/clientes']);
                        }, (err: any) => {
                          console.log(err);
                        })
  }

}
