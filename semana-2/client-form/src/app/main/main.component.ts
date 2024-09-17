import { Component } from '@angular/core';
import { Client } from '../../interfaces/client.model'; // Adjust the path as necessary

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  clients: Client[] = [];

  onClientAdded(client: Client) {
    this.clients.push(client);
  }
}
