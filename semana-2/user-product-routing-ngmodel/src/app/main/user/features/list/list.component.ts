import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  users: Array<User> = [];

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.updateList();
  }

  removeUser(id?: number) {
    if (id || id == 0) {
      this.userService.removeUser(id);
      this.updateList();
    }
  }

  editUser(user: User) {
    this.router.navigate([`/formulario/${user.id}`])
  }

  updateList() {
    this.users = this.userService.getUsers;
  }
}
