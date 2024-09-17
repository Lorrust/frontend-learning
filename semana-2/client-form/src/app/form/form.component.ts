// form.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { Client } from '../../interfaces/client.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Output() clientAdded = new EventEmitter<Client>();

  newClient: Client = { name: '', email: '' };

  addClient() {
    if (this.newClient.name !== '' || this.newClient.email !== '') {
    this.clientAdded.emit(this.newClient);
    this.newClient = { name: '', email: '' }
    }; // Reset the form
  }
}
