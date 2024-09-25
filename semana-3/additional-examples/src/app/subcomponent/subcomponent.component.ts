import { Component } from '@angular/core';

@Component({
  selector: 'app-subcomponent',
  templateUrl: './subcomponent.component.html',
  styleUrl: './subcomponent.component.scss'
})
export class SubcomponentComponent {
  title = 'Subcomponent Title';
  private subtitle = 'hidden subtitle';

  logaValor() {
    console.log(this.subtitle);
  }

}
