import { Injectable } from '@angular/core';
import { User } from '../../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private id = 0;
  private users: Array<User> = [];

  addUser(user: User) {
    user.id = this.id;
    this.users.push(user);
    this.id++;
  }

  removeUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }

  get getUsers() {
    return this.users;
  }

  findById(id: number): User | undefined {
    return this.users.find(user => user.id == id);
  }

  editUser(user: User) {
    this.users.forEach(userList => {
      if (userList.id === user.id) {
        userList.name = user.name;
        userList.email = user.email;
        return;
      }
    });
  }
}
