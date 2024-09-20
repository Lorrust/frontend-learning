import {UserService } from '../../services/user.service';
import { User } from '../../../../models/user.model';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  id?: number;
  name?: string;
  email?: string;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.activeRoute.params.subscribe(params => {
      const user: User | undefined = this.userService.findById(params['id']);
      this.editUser(user);
    });
  }

  registerUser() {
    if (this.name && this.email && !this.id) {
      this.userService.addUser({ name: this.name, email: this.email });
    } else if (this.id && this.name && this.email) {
      this.userService.editUser({ id: this.id, name: this.name, email: this.email });
      this.router.navigate(['/list']);
    }

    this.name = '';
    this.id = undefined;
    this.email = undefined;
  }

  editUser(user?: User) {
    if (user) {
      this.id = user.id;
      this.name = user.name;
      this.email = user.email;
    }
  }

}
