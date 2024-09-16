import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() title?:string;
  @Output() SearchClicked = new EventEmitter<string>();

  search?: string;

  sendSignal() {
    this.SearchClicked.emit(this.search);
  }
}
