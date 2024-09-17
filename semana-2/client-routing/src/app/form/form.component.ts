import { Component, Output, EventEmitter } from '@angular/core';
import { Client } from '../../interfaces/client.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Output() clientAdded = new EventEmitter<Client>();

  clientForm: Client = { id: 0, name: '', email: '' };

  clientSequence = 0;

  addClient() {
    if (this.clientForm.name !== '' || this.clientForm.email !== '') {
      const newClient: Client = { ...this.clientForm, id: this.clientSequence++ };
      this.clientAdded.emit(newClient);
    };
  }
}
