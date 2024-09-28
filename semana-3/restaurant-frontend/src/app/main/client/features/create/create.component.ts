import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../../../models/client.model';
import { ClientService } from '../../../client/services/client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private clientService: ClientService,
    private formBuilder: FormBuilder) {
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      if (params['id']) {
        this.clientService.findById(params['id']).subscribe((client: Client) => {
          this.editClient(client);
        });
      }
    });
  }

  buildForm() {
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null, Validators.required],
      sobrenome: [null, Validators.required],
      cpf: [null, Validators.required],
      dataNascimento: [null, Validators.required],
      sexo: [null, Validators.required],
      telefone: [null, Validators.required],
      restaurante: [null, Validators.required], // Assuming you have a way to select a restaurant
      quantidadeReservas: [0, Validators.required],
      quantidadeValorGasto: [0, Validators.required],
      flgBloqueado: [false, Validators.required],
    });
  }

  registerClient() {
    const client = this.form.getRawValue();
    console.log(client);
    if (!client.id) {
      this.clientService.addClient(client).subscribe(() => {
        this.router.navigate(['/cliente']);
      });
    } else if (client.id) {
      this.clientService.editClient(client).subscribe(() => {
        this.router.navigate(['/cliente']);
      });
    }
  }

  editClient(client?: Client) {
    if (client && client.id) {
      this.clientService.findById(client.id).subscribe((response: any) => {
        this.form.patchValue(response);
      });
    }
  }
}
