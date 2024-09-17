// list.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../../interfaces/client.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() clients: Client[] = [];
  @Output() clientDeleted = new EventEmitter<Client>();
  @Output() clientEdited = new EventEmitter<Client>();

  deleteClient(client: Client) {
    console.log('Client deleted:', client);
    this.clientDeleted.emit(client);
  }

  editClient(client: Client) {
    console.log('Client edited:', client);
    this.clientEdited.emit(client);
  }
}
