// list.component.ts
import { Component, Input } from '@angular/core';
import { Client } from '../../interfaces/client.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() clients: Client[] = [];
}
