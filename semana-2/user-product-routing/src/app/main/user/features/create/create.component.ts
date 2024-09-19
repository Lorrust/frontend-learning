import {UserService } from '../../services/user.service';
import { User } from '../../../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent implements OnInit {

  form!: FormGroup;

  ngOnInit(): void {
    this.buildForm();
    this.form.patchValue({ name: 'test', email: 'test@email.com' });
  }

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder) {
    this.activeRoute.params.subscribe(params => {
      const user: User | undefined = this.userService.findById(params['id']);
      this.editUser(user);
    });
  }

  buildForm() {
    this.form = this.formBuilder.group({
      name: [null, (Validators.required)],
      email: [null, (Validators.required)],
      id: [null]
    });
  }

  registerUser() {
    const user = this.form.getRawValue();
    if (user && !user.id) {
      this.userService.addUser(user);
    } else if (user && user.id) {
      this.userService.editUser(user);
      this.router.navigate(['/list']);
    }
    // Reset form
    this.form.patchValue({ name: '', email: '' });
  }

  editUser(user?: User) {
    if (user) {
      this.form.patchValue(user);
    }
  }

}
