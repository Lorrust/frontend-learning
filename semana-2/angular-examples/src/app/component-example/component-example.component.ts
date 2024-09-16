import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-component-example',
  templateUrl: './component-example.component.html',
  styleUrl: './component-example.component.scss'
})
export class ComponentExampleComponent {
  @Input() title?: string;
  @Output() buttonClicked = new EventEmitter<string>();

  sendSignal() {
    this.buttonClicked.emit("Button clicked!");
  }
}
