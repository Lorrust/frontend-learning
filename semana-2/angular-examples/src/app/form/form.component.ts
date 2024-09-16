import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  name = "Test";
  email = "test@gmail.com";
  phone = "137116843";

  submitForm() {
    alert("Thank you for sending the form.")
  }
}
