import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-example';
  showContent = true;

  submit() {
    alert("Button clicked!")
  }

  alertSearch(string: string) {
    alert(string)
  }
}
