import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  form: UntypedFormGroup;

  constructor(private clientesService: ClientesService,
              private router: Router) { }

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      nombre: new UntypedFormControl('', [Validators.required]),
      cif: new UntypedFormControl('', [Validators.required, Validators.minLength(9)]),
      direccion: new UntypedFormControl(''),
      localidad: new UntypedFormControl('')
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
